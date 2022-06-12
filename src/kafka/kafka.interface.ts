export interface KafkaMessagePayload {
  value: {
    to: string;
    name: string;
    subject: string;
    template: string;
  };
}
