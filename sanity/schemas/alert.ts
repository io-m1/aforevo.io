export default {
  name: 'alert',
  title: 'Red Phone Alerts',
  type: 'document',
  fields: [
    { name: 'message', title: 'Broadcast Message', type: 'string' },
    { name: 'isActive', title: 'Broadcast Live?', type: 'boolean', initialValue: false },
    { name: 'link', title: 'Action Link', type: 'url' },
    { name: 'level', title: 'Urgency', type: 'string', options: { list: ['info', 'warning', 'critical'] } },
  ],
};
