import { DataType } from "./types/types";

const data: DataType[] = [
  {
    key: "1",
    name: "Zoom",
    category: "Video Conferencing and Collaboration",
    connector: "Reco",
    connectedUsers: [],
    lastClassification: "2 days ago",
  },
  {
    key: "2",
    name: "Slack",
    category: "IM",
    connector: "Reco",
    connectedUsers: [],
    lastClassification: "2 days ago",
  },
  {
    key: "3",
    name: "XSOAR",
    category: "Security Automation",
    connector: "Reco",
    connectedUsers: [],
    lastClassification: "2 days ago",
  },
  {
    key: "4",
    name: "Torq",
    category: "Security Automation",
    connector: "Reco",
    connectedUsers: [],
    lastClassification: "2 days ago",
  },
  {
    key: "5",
    name: "Virtu",
    category: "Financial",
    connector: "Reco",
    connectedUsers: [],
    lastClassification: "2 days ago",
  },
  {
    key: "6",
    name: "Tines",
    category: "Automation",
    connector: "Reco",
    connectedUsers: [],
    lastClassification: "2 days ago",
  },
  {
    key: "7",
    name: "Splunk",
    category: "Monitoring",
    connector: "Reco",
    connectedUsers: [],
    lastClassification: "2 days ago",
  },
  {
    key: "8",
    name: "Sharepoint",
    category: "Drive",
    connector: "Reco",
    connectedUsers: [],
    lastClassification: "2 days ago",
  },
  {
    key: "9",
    name: "ServiceNow",
    category: "Cloud",
    connector: "Reco",
    connectedUsers: [],
    lastClassification: "2 days ago",
  },
  {
    key: "10",
    name: "Backupify",
    category: "Automation",
    connector: "Reco",
    connectedUsers: [],
    lastClassification: "2 days ago",
  },
  {
    key: "11",
    name: "ChurnZero",
    category: "Customer Success",
    connector: "Reco",
    connectedUsers: [],
    lastClassification: "2 days ago",
  },
];

export const getData = () =>
  new Promise((resolve) => {
    return resolve(data);
  });
