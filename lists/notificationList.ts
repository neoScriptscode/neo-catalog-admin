import { relationship, text, timestamp } from '@keystone-next/fields';
import { list } from '@keystone-next/keystone/schema';

const notificationList = list({
    ui: {
        listView: {
            initialColumns: ['notification', 'is_seen', 'customer'],
        },
    },
    fields: {
        notification: text({ isRequired: true }),
        customer: relationship({
            ref: 'User.notifications'
        }),
        created_at: timestamp({ defaultValue: Date() }),
        updated_at: timestamp(),
        deleted_at: timestamp({ isRequired: false }), // the deleted_at and is_deleted fiels are used for soft deletes  
        is_deleted: text({ isRequired: true, defaultValue: 'false' }),
        is_seen: text({ isRequired: true, defaultValue: 'false' }),
    },
});

export default notificationList;
