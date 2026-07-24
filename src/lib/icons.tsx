const G = "#316b00";
const N = "#003643";

export const ContactsIcon = () => (
  <svg viewBox="0 0 24 24" fill="none">
    <circle cx="9" cy="8" r="3.2" fill={G} />
    <path d="M3.5 19c0-3 2.5-5 5.5-5s5.5 2 5.5 5" stroke={N} strokeWidth="2" strokeLinecap="round" />
    <circle cx="17" cy="9" r="2.4" fill={N} />
    <path d="M15.5 15.5c2.2-.4 5 .8 5 3.5" stroke={G} strokeWidth="2" strokeLinecap="round" />
  </svg>
);

export const OpportunityIcon = () => (
  <svg viewBox="0 0 24 24" fill="none">
    <path d="M4 20V11M10 20V6M16 20v-5M22 20V4" stroke={N} strokeWidth="2.2" strokeLinecap="round" />
    <path d="M4 11l6-5 6 3 6-5" stroke={G} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const ConversationsIcon = () => (
  <svg viewBox="0 0 24 24" fill="none">
    <rect x="2.5" y="4" width="14" height="10" rx="3" fill={G} />
    <path d="M6 18l3-4" stroke={G} strokeWidth="2" strokeLinecap="round" />
    <rect x="10" y="10" width="11.5" height="8.5" rx="2.5" fill={N} />
    <path d="M17 22l-2.5-3.5" stroke={N} strokeWidth="2" strokeLinecap="round" />
  </svg>
);

export const JobsIcon = () => (
  <svg viewBox="0 0 24 24" fill="none">
    <rect x="3" y="7" width="18" height="13" rx="2.5" fill={G} />
    <path d="M8.5 7V5.5A1.5 1.5 0 0110 4h4a1.5 1.5 0 011.5 1.5V7" stroke={N} strokeWidth="2" strokeLinecap="round" />
    <path d="M3 12h18" stroke="#fff" strokeWidth="1.6" />
  </svg>
);

export const TasksIcon = () => (
  <svg viewBox="0 0 24 24" fill="none">
    <rect x="3.5" y="3.5" width="17" height="17" rx="3" fill={N} />
    <path d="M8 12l2.8 2.8L16.5 9" stroke={G} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const ProductionIcon = () => (
  <svg viewBox="0 0 24 24" fill="none">
    <path d="M3 20V10l5 3V9l5 3V8l6 4v8H3z" fill={N} />
    <circle cx="19" cy="5.5" r="2.5" fill={G} />
  </svg>
);

export const OperationsIcon = () => (
  <svg viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="3.3" fill={G} />
    <path d="M12 2.5v3M12 18.5v3M2.5 12h3M18.5 12h3M5.2 5.2l2.1 2.1M16.7 16.7l2.1 2.1M18.8 5.2l-2.1 2.1M7.3 16.7l-2.1 2.1" stroke={N} strokeWidth="2" strokeLinecap="round" />
  </svg>
);

export const CalloutIcon = () => (
  <svg viewBox="0 0 24 24" fill="none">
    <path d="M5 4h3l1.5 4-2 1.5a11 11 0 005 5l1.5-2 4 1.5V19a2 2 0 01-2 2A15 15 0 013 6a2 2 0 012-2z" fill={N} />
    <circle cx="18" cy="6" r="3" fill={G} />
  </svg>
);

export const HrIcon = () => (
  <svg viewBox="0 0 24 24" fill="none">
    {/* Human Figure (Left) */}
    <circle cx="7.5" cy="8" r="3" fill={G} />
    <path d="M2 20c0-3.5 2.5-5.5 5.5-5.5s5.5 2 5.5 5.5" stroke={N} strokeWidth="2" strokeLinecap="round" />
    
    {/* Research / Lens (Right) */}
    {/* The glass lens frame */}
    <circle cx="16.5" cy="11.5" r="4.5" stroke={G} strokeWidth="2" />
    {/* The handle pointing down-right */}
    <path d="M19.5 14.5l2.5 2.5" stroke={N} strokeWidth="2" strokeLinecap="round" />
    
    {/* Data / Insight Nodes inside the lens area */}
    <circle cx="15" cy="10" r="1" fill={N} />
    <circle cx="18" cy="12" r="1" fill={N} />
    <path d="M15 10l3 2" stroke={N} strokeWidth="1.2" strokeLinecap="round" />
  </svg>
);
export const TrainingIcon = () => (
  <svg viewBox="0 0 24 24" fill="none">
    <path d="M12 4l9 4-9 4-9-4 9-4z" fill={G} />
    <path d="M6 10v4c0 1.5 2.7 3 6 3s6-1.5 6-3v-4" stroke={N} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M21 8v5" stroke={N} strokeWidth="2" strokeLinecap="round" />
  </svg>
);

export const InventoryIcon = () => (
  <svg viewBox="0 0 24 24" fill="none">
    <path d="M12 3l8 4.5v9L12 21l-8-4.5v-9L12 3z" fill={N} />
    <path d="M4 7.5l8 4.5 8-4.5M12 12v9" stroke={G} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const FleetIcon = () => (
  <svg viewBox="0 0 24 24" fill="none">
    <path d="M2.5 15V9h10v6M12.5 11h4l3 3v1h-7" fill={N} />
    <path d="M2.5 15h17" stroke={N} strokeWidth="2" strokeLinecap="round" />
    <circle cx="6.5" cy="16.5" r="2.2" fill={G} />
    <circle cx="16.5" cy="16.5" r="2.2" fill={G} />
  </svg>
);

export const VaultIcon = () => (
  <svg viewBox="0 0 24 24" fill="none">
    <rect x="3.5" y="4.5" width="17" height="15" rx="2.5" fill={N} />
    <circle cx="12" cy="12" r="4" stroke={G} strokeWidth="2" />
    <path d="M12 12v3.5" stroke={G} strokeWidth="2" strokeLinecap="round" />
  </svg>
);

export const MarketingIcon = () => (
  <svg viewBox="0 0 24 24" fill="none">
    <path d="M3 10v4l3 .5V9.5L3 10z" fill={N} />
    <path d="M6 9.5L18 4v16L6 14.5" fill={G} />
    <path d="M8 15v4l3 .5V15.5" stroke={N} strokeWidth="2" strokeLinecap="round" />
  </svg>
);

export const BuilderIcon = () => (
  <svg viewBox="0 0 24 24" fill="none">
    <path d="M14.5 3.5l6 6-3 3-1.5-1.5-5.5 5.5c-.8.8-2 .8-2.8 0s-.8-2 0-2.8L13.2 8l-1.7-1.5 3-3z" fill={N} />
    <path d="M5 15l-2 5 5-2" stroke={G} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const AdminIcon = () => (
  <svg viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="3.3" fill={G} />
    <path d="M12 2l1.6 2.3 2.7-.7.4 2.8 2.8.4-.7 2.7L21 12l-2.2 1.5.7 2.7-2.8.4-.4 2.8-2.7-.7L12 21l-1.6-2.3-2.7.7-.4-2.8-2.8-.4.7-2.7L3 12l2.2-1.5-.7-2.7 2.8-.4.4-2.8 2.7.7L12 2z" stroke={N} strokeWidth="1.6" strokeLinejoin="round" />
  </svg>
);

export const CalendarIcon = () => (
  <svg viewBox="0 0 24 24" fill="none">
    <rect x="3.5" y="5" width="17" height="15" rx="2.5" fill={G} />
    <path d="M3.5 9.5h17" stroke="#fff" strokeWidth="1.6" />
    <path d="M8 3v4M16 3v4" stroke={N} strokeWidth="2" strokeLinecap="round" />
    <rect x="7" y="12.5" width="3" height="3" rx="1" fill="#fff" />
  </svg>
);

export const LogsIcon = () => (
  <svg viewBox="0 0 24 24" fill="none">
    <rect x="4.5" y="3" width="15" height="18" rx="2.5" fill={N} />
    <path d="M8 8h8M8 12h8M8 16h5" stroke={G} strokeWidth="2" strokeLinecap="round" />
  </svg>
);

export const PenIcon = () => (
  <svg viewBox="0 0 24 24" fill="none">
    <path d="M14.5 3.5l6 6L9 21l-6 1 1-6L14.5 3.5z" fill={G} />
    <path d="M13 5l6 6" stroke={N} strokeWidth="1.8" />
  </svg>
);

export const SearchIcon = () => (
  <svg viewBox="0 0 24 24" fill="none">
    <circle cx="10.5" cy="10.5" r="6" stroke={N} strokeWidth="2" />
    <path d="M15 15l5 5" stroke={G} strokeWidth="2.4" strokeLinecap="round" />
  </svg>
);

export const DocusignIcon = () => (
  <svg viewBox="0 0 24 24" fill="#000000">
    <path d="M9.517 3.31h4.966v6.621h3.31L12 16.552 6.207 9.931h3.31V3.31zM0 19.034h24v1.655H0v-1.655z" />
  </svg>
);

export const MailchimpIcon = () => (
  <svg viewBox="0 0 24 24" fill="#241C15">
    <path d="M11.267 0C6.791-.015-1.82 10.246 1.397 12.964l.79.669a3.88 3.88 0 0 0-.22 1.792c.084.84.518 1.644 1.22 2.266.666.59 1.542.964 2.392.964 1.406 3.24 4.62 5.228 8.386 5.34 4.04.12 7.433-1.776 8.854-5.182.093-.24.488-1.316.488-2.267 0-.956-.54-1.352-.885-1.352-.01-.037-.078-.286-.172-.586-.093-.3-.19-.51-.19-.51.375-.563.382-1.065.332-1.35-.053-.353-.2-.653-.496-.964-.296-.311-.902-.63-1.753-.868l-.446-.124c-.002-.019-.024-1.053-.043-1.497-.014-.32-.042-.822-.197-1.315-.186-.668-.508-1.253-.911-1.627 1.112-1.152 1.806-2.422 1.804-3.511-.003-2.095-2.576-2.729-5.746-1.416l-.672.285A678.22 678.22 0 0 0 12.7.504C12.304.159 11.817.002 11.267 0zm.073.873c.166 0 .322.019.465.058.297.084 1.28 1.224 1.28 1.224s-1.826 1.013-3.52 2.426c-2.28 1.757-4.005 4.311-5.037 7.082-.811.158-1.526.618-1.963 1.253-.261-.218-.748-.64-.834-.804-.698-1.326.761-3.902 1.781-5.357C5.834 3.44 9.37.867 11.34.873z" />
  </svg>
);

export const EmailIcon = () => (
  <svg viewBox="0 0 24 24" fill="none">
    <rect x="3" y="6" width="18" height="12" rx="2" stroke={N} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M3 6l9 6 9-6" stroke={G} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const WebsiteIcon = () => (
<svg
  xmlns="http://www.w3.org/2000/svg"
  width="800"
  height="800"
  viewBox="0 0 64 64"
  fill="none"
  stroke="#000000"
  stroke-width="3"
>
  <path d="M39.93,55.72A24.86,24.86,0,1,1,56.86,32.15a37.24,37.24,0,0,1-.73,6"/>
  <path d="M37.86,51.1A47,47,0,0,1,32,56.7"/>
  <path d="M32,7A34.14,34.14,0,0,1,43.57,30a34.07,34.07,0,0,1,.09,4.85"/>
  <path d="M32,7A34.09,34.09,0,0,0,20.31,32.46c0,16.2,7.28,21,11.66,24.24"/>
  <line x1="10.37" y1="19.9" x2="53.75" y2="19.9"/>
  <line x1="32" y1="6.99" x2="32" y2="56.7"/>
  <line x1="11.05" y1="45.48" x2="37.04" y2="45.48"/>
  <line x1="7.14" y1="32.46" x2="56.86" y2="31.85"/>
  <path d="M53.57,57,58,52.56l-8-8,4.55-2.91a.38.38,0,0,0-.12-.7L39.14,37.37a.39.39,0,0,0-.46.46L42,53.41a.39.39,0,0,0,.71.13L45.57,49Z"/>
</svg>
);

export const GoogleAdsIcon = () => (
  <svg viewBox="0 0 24 24" fill="#4285F4">
    <path d="M3.9998 22.9291C1.7908 22.9291 0 21.1383 0 18.9293s1.7908-3.9998 3.9998-3.9998 3.9998 1.7908 3.9998 3.9998-1.7908 3.9998-3.9998 3.9998zm19.4643-6.0004L15.4632 3.072C14.3586 1.1587 11.9121.5028 9.9988 1.6074S7.4295 5.1585 8.5341 7.0718l8.0009 13.8567c1.1046 1.9133 3.5511 2.5679 5.4644 1.4646 1.9134-1.1046 2.568-3.5511 1.4647-5.4644zM7.5137 4.8438L1.5645 15.1484A4.5 4.5 0 0 1 4 14.4297c2.5597-.0075 4.6248 2.1585 4.4941 4.7148l3.2168-5.5723-3.6094-6.25c-.4499-.7793-.6322-1.6394-.5878-2.4784z" />
  </svg>
);

export const MetaIcon = () => (
  <svg viewBox="0 0 24 24" fill="#0467DF">
    <path d="M6.915 4.03c-1.968 0-3.683 1.28-4.871 3.113C.704 9.208 0 11.883 0 14.449c0 .706.07 1.369.21 1.973a6.624 6.624 0 0 0 .265.86 5.297 5.297 0 0 0 .371.761c.696 1.159 1.818 1.927 3.593 1.927 1.497 0 2.633-.671 3.965-2.444.76-1.012 1.144-1.626 2.663-4.32l.756-1.339.186-.325c.061.1.121.196.183.3l2.152 3.595c.724 1.21 1.665 2.556 2.47 3.314 1.046.987 1.992 1.22 3.06 1.22 1.075 0 1.876-.355 2.455-.843a3.743 3.743 0 0 0 .81-.973c.542-.939.861-2.127.861-3.745 0-2.72-.681-5.357-2.084-7.45-1.282-1.912-2.957-2.93-4.716-2.93-1.047 0-2.088.467-3.053 1.308-.652.57-1.257 1.29-1.82 2.05-.69-.875-1.335-1.547-1.958-2.056-1.182-.966-2.315-1.303-3.454-1.303zm10.16 2.053c1.147 0 2.188.758 2.992 1.999 1.132 1.748 1.647 4.195 1.647 6.4 0 1.548-.368 2.9-1.839 2.9-.58 0-1.027-.23-1.664-1.004-.496-.601-1.343-1.878-2.832-4.358l-.617-1.028a44.908 44.908 0 0 0-1.255-1.98c.07-.109.141-.224.211-.327 1.12-1.667 2.118-2.602 3.358-2.602zm-10.201.553c1.265 0 2.058.791 2.675 1.446.307.327.737.871 1.234 1.579l-1.02 1.566c-.757 1.163-1.882 3.017-2.837 4.338-1.191 1.649-1.81 1.817-2.486 1.817-.524 0-1.038-.237-1.383-.794-.263-.426-.464-1.13-.464-2.046 0-2.221.63-4.535 1.66-6.088.454-.687.964-1.226 1.533-1.533a2.264 2.264 0 0 1 1.088-.285z" />
  </svg>
);

export const LayersClearIcon = () => (
  <svg viewBox="0 0 24 24" fill="none">
    <path d="M12 4L2 9l10 5 10-5-10-5z" fill={G} />
    <path d="M2 14l10 5 10-5" stroke={N} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M2 19l10 5 10-5" stroke={N} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const PersonPinIcon = () => (
  <svg viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="8" r="4" fill={G} />
    <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" stroke={N} strokeWidth="2" strokeLinecap="round" />
    <circle cx="19" cy="15" r="3" stroke={G} strokeWidth="2" />
    <path d="M19 13v4M17 15h4" stroke={G} strokeWidth="2" strokeLinecap="round" />
  </svg>
);

export const HourglassIcon = () => (
  <svg viewBox="0 0 24 24" fill="none">
    <path d="M5 3h14v4l-5 5 5 5v4H5v-4l5-5-5-5V3z" fill={N} />
    <path d="M9 12l3 3 3-3" stroke={G} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const ICON_MAP: Record<string, React.ComponentType> = {
  contacts: ContactsIcon,
  opportunity: OpportunityIcon,
  conversations: ConversationsIcon,
  jobs: JobsIcon,
  tasks: TasksIcon,
  production: ProductionIcon,
  operations: OperationsIcon,
  callout: CalloutIcon,
  hr: HrIcon,
  training: TrainingIcon,
  inventory: InventoryIcon,
  fleet: FleetIcon,
  vault: VaultIcon,
  marketing: MarketingIcon,
  builder: BuilderIcon,
  admin: AdminIcon,
  calendar: CalendarIcon,
  logs: LogsIcon,
  layers_clear: LayersClearIcon,
  person_pin_circle: PersonPinIcon,
  hourglass_bottom: HourglassIcon,
  website:WebsiteIcon,
  email: EmailIcon
};
