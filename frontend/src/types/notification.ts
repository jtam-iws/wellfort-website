export interface INotificationContent {
  message: string;
  link?: {
    url: string;
    label: string;
  };
}

export interface INotification extends INotificationContent {
  enabled: boolean;
  expires?: string;
  frequency: number;
}

export interface INotificationHook extends INotificationContent {
  show: boolean;
  close: () => void;
}
