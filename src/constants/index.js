export const SYSTEM_VALUES_DOCUMENT =
  process.env.REACT_APP_SYSTEM_VALUES_DOCUMENT_NAME;

export const ATTRONEY_STATUS_COLORS = {
  Interviewing: "#2475D0",
  Placed: "#304059",
  Pipeline: "#784DB0",
  Terminated: "#CE4343",
  Voluntary: "#F58020",
  Converted: "#30A25D",
  Inactive: "#9DA1AA",
  "Not Interviewing": "#80658C",
  "Nontraditional Placement": "#836565",
};

export const ATTRONEY_STATUS_OPTIONS = [
  {
    value: "Interviewing",
    label: "Interviewing",
    color: ATTRONEY_STATUS_COLORS.Interviewing,
    box: true,
  },
  {
    value: "Pipeline",
    label: "Pipeline",
    color: ATTRONEY_STATUS_COLORS.Pipeline,
    box: true,
  },

  {
    value: "Placed",
    label: "Placed",
    color: ATTRONEY_STATUS_COLORS.Placed,
    box: true,
  },

  {
    value: "Terminated",
    label: "Terminated",
    color: ATTRONEY_STATUS_COLORS.Terminated,
    box: true,
  },

  {
    value: "Voluntary",
    label: "Voluntary",
    color: ATTRONEY_STATUS_COLORS.Voluntary,
    box: true,
  },
  {
    value: "Converted",
    label: "Converted",
    color: ATTRONEY_STATUS_COLORS.Converted,
    box: true,
  },

  {
    value: "Inactive",
    label: "Inactive",
    color: ATTRONEY_STATUS_COLORS.Inactive,
    box: true,
  },

  {
    value: "Not Interviewing",
    label: "Not Interviewing",
    color: ATTRONEY_STATUS_COLORS["Not Interviewing"],
    box: true,
  },
  {
    value: "Nontraditional Placement",
    label: "Nontraditional Placement",
    color: ATTRONEY_STATUS_COLORS["Nontraditional Placement"],
    box: true,
  },
];

export const ATTORNEY_STATUS_ORDER = [
  "Pipeline",
  "Not Interviewing",
  "Interviewing",
  "Placed",
  "Voluntary",
  "Terminated",
  "Converted",
  "Returned",
  "Inactive",
];

export const CLIENTS_STATUS_COLORS = {
  Interviewing: "#DFEEFF",
  Placed: "#D0D2FF",
  Terminated: "#DAA6AB",
  Voluntary: "#F8DCC3",
  Converted: "#DEFFEB",
  Rejected: "#FFCCCC",
  Returned: "#E6E7E8",
  "Midway Return": "#FFF2CD",
};

export const BAR_STATUS_COLORS = {
  Studying: "#CFEEFF",
  Tested: "#F9E5B1",
  Failed: "#EAAEAE",
  Passed: "#C1EBD2",
};

export const BAR_STATUS_OPTIONS = [
  {
    value: "Studying",
    label: "Studying",
    color: BAR_STATUS_COLORS.Studying,
  },

  {
    value: "Tested",
    label: "Tested",
    color: BAR_STATUS_COLORS.Tested,
  },

  {
    value: "Failed",
    label: "Failed",
    color: BAR_STATUS_COLORS.Failed,
  },

  {
    value: "Passed",
    label: "Passed",
    color: BAR_STATUS_COLORS.Passed,
  },
];

export const CLIENT_STATUS_OPTIONS = [
  {
    value: "Interviewing",
    label: "Interviewing",
    color: CLIENTS_STATUS_COLORS.Interviewing,
  },

  {
    value: "Placed",
    label: "Placed",
    color: CLIENTS_STATUS_COLORS.Placed,
  },

  {
    value: "Terminated",
    label: "Terminated",
    color: CLIENTS_STATUS_COLORS.Terminated,
  },

  {
    value: "Voluntary",
    label: "Voluntary",
    color: CLIENTS_STATUS_COLORS.Voluntary,
  },
  {
    value: "Converted",
    label: "Converted",
    color: CLIENTS_STATUS_COLORS.Converted,
  },

  {
    value: "Rejected",
    label: "Rejected",
    color: CLIENTS_STATUS_COLORS.Rejected,
  },

  {
    value: "Returned",
    label: "Returned",
    color: CLIENTS_STATUS_COLORS.Returned,
  },
  {
    value: "Midway Return",
    label: "Midway Return",
    color: CLIENTS_STATUS_COLORS["Midway Return"],
  },
];

export const DEMO_OPTIONS = [
  "Central",
  "Ghanzi",
  "Kgalagadi",
  "Kgatleng",
  "Kweneng",
  "North East",
  "North West",
  "South East",
  "Southern",
].map((state) => ({ label: state, value: state }));
export const PRIORITY_OPTIONS = ["Critical", "High", "Medium", "Low"].map(
  (state) => ({ label: state, value: state })
);
export const STATUS_OPTIONS = [
  "Inprogress",
  "Approved",
  "Rejected",
  "Completed",
].map((state) => ({ label: state, value: state }));
export const PERIOD_OPTIONS = [
  "Today",
  "This Week",
  "Last Week",
  "This Month",
  "Custom range",
].map((state) => ({ label: state, value: state }));
export const GENDER_OPTIONS = [
  {
    value: "male",
    label: "Male",
    color: "black",
    checkbox: false,
    box: false,
  },
  {
    value: "female",
    label: "Female",
    color: "black",
    checkbox: false,
    box: false,
  },
  {
    value: "trans Woman",
    label: "Trans Woman",
    color: "black",
    checkbox: false,
    box: false,
  },
  {
    value: "trans Man",
    label: "Trans Man",
    color: "black",
    checkbox: false,
    box: false,
  },
  {
    value: "non-binary or Third Gender",
    label: "Non-binary or Third Gender",
    color: "black",
    checkbox: false,
    box: false,
  },
];

export const CLE_SUBJECTS = [
  {
    value: "Ethics",
    label: "Ethics",
  },

  {
    value: "Diversity",
    label: "Diversity",
  },

  {
    value: "Inclusion and Elimination of Bias",
    label: "Inclusion and Elimination of Bias",
  },

  {
    value: "Skills/Competence Issues",
    label: "Skills/Competence Issues",
  },
  {
    value: "General",
    label: "General",
  },

  {
    value: "Implicit Bias",
    label: "Implicit Bias",
  },
];

export const CLE_SUBJECTS_MATTER = [
  {
    value: "Corporate",
    label: "Corporate",
  },

  {
    value: "Litigation",
    label: "Litigation",
  },

  {
    value: "Professional",
    label: "Professional",
  },

  {
    value: "Skills",
    label: "Skills",
  },
];
export const PHONE_DATA = [
  {
    value: "telNo",
    label: "Phone Number",
  },
  {
    value: "prmMbilTelNo",
    label: "Primary Phone",
  },

  {
    value: "scndMbilTelNo",
    label: "Secondary Number",
  },

  {
    value: "emrgncyTelNo",
    label: "Emergency Number",
  },
];
export const STATES = [
  "AL",
  "AK",
  "AZ",
  "AR",
  "CA",
  "CO",
  "CT",
  "DE",
  "FL",
  "GA",
  "HI",
  "ID",
  "IL",
  "IN",
  "IA",
  "KS",
  "KY",
  "LA",
  "ME",
  "MD",
  "MA",
  "MI",
  "MN",
  "MS",
  "MO",
  "MT",
  "NE",
  "NV",
  "NH",
  "NJ",
  "NM",
  "NY",
  "NC",
  "ND",
  "OH",
  "OK",
  "OR",
  "PA",
  "RI",
  "SC",
  "SD",
  "TN",
  "TX",
  "UT",
  "VT",
  "VA",
  "WA",
  "WV",
  "WI",
  "WY",
].map((state) => ({ label: state, value: state }));
