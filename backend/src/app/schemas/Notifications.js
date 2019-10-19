import mongose from 'mongoose';

const NotificationsSchema = new mongose.Schema(
  {
    content: {
      type: String,
      required: true,
    },
    user: {
      type: Number,
      required: true,
    },
    read: {
      type: Boolean,
      required: true,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongose.model('Notification', NotificationsSchema);
