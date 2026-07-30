"use client";

import { useState } from "react";
import type { ZodSchema } from "zod";

interface UseFormOptions<T> {
  schema: ZodSchema<T>;
  onSubmit: (data: T) => Promise<void>;
}

interface FormState<T> {
  data: Partial<T>;
  errors: Partial<Record<keyof T, string>>;
  touched: Partial<Record<keyof T, boolean>>;
  submitError: string | null;
  isSubmitting: boolean;
  isSubmitted: boolean;
  submitAttempted: boolean;
}

export function useForm<T extends Record<string, unknown>>({
  schema,
  onSubmit,
}: UseFormOptions<T>) {
  const [state, setState] = useState<FormState<T>>({
    data: {},
    errors: {},
    touched: {},
    submitError: null,
    isSubmitting: false,
    isSubmitted: false,
    submitAttempted: false,
  });

  const runValidation = (data: unknown): Partial<Record<keyof T, string>> => {
    const result = schema.safeParse(data);
    if (result.success) return {};
    const errors: Partial<Record<keyof T, string>> = {};
    result.error.issues.forEach((issue) => {
      const field = issue.path[0] as keyof T;
      if (!errors[field]) errors[field] = issue.message;
    });
    return errors;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setState((prev) => {
      const nextData = { ...prev.data, [name]: value } as Partial<T>;
      return { ...prev, data: nextData, errors: runValidation(nextData) };
    });
  };

  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name } = e.target;
    setState((prev) => ({
      ...prev,
      touched: { ...prev.touched, [name as keyof T]: true },
      errors: runValidation(prev.data),
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const raw = Object.fromEntries(formData.entries()) as Record<string, unknown>;
    const errors = runValidation(raw);

    const allTouched: Partial<Record<keyof T, boolean>> = {};
    Object.keys(raw).forEach((k) => {
      allTouched[k as keyof T] = true;
    });

    if (Object.keys(errors).length > 0) {
      setState((prev) => ({
        ...prev,
        errors,
        touched: { ...prev.touched, ...allTouched },
        submitAttempted: true,
        submitError: null,
      }));
      return;
    }

    setState((prev) => ({
      ...prev,
      errors: {},
      touched: { ...prev.touched, ...allTouched },
      submitAttempted: true,
      submitError: null,
      isSubmitting: true,
    }));

    try {
      await onSubmit(raw as T);
      setState((prev) => ({ ...prev, isSubmitting: false, isSubmitted: true }));
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "Something went wrong. Please try again.";
      setState((prev) => ({ ...prev, isSubmitting: false, submitError: message }));
    }
  };

  const isVisible = (name: keyof T) =>
    Boolean(state.touched[name]) || state.submitAttempted;

  return {
    data: state.data,
    errors: state.errors,
    touched: state.touched,
    submitError: state.submitError,
    isSubmitting: state.isSubmitting,
    isSubmitted: state.isSubmitted,
    submitAttempted: state.submitAttempted,
    handleChange,
    handleBlur,
    handleSubmit,
    getFieldError: (name: keyof T) => (isVisible(name) ? state.errors[name] : undefined),
    hasError: (name: keyof T) => isVisible(name) && !!state.errors[name],
  };
}
