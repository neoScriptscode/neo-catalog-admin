import { text, timestamp, select, relationship } from '@keystone-next/fields';
import { list } from '@keystone-next/keystone/schema';

const attributeTypeList = list({
    ui: {
        listView: {
            initialColumns: ['attribute_type', 'attribute'],
        },
    },

    fields: {
        created_at: timestamp({ defaultValue: Date() }),
        updated_at: timestamp(),
        deleted_at: timestamp({ isRequired: false }), // the deleted_at fiels is used for soft deletes  
        is_deleted: text({ isRequired: true, defaultValue: 'false' }),
        attribute: relationship({ ref: 'Attribute', many: true }),
        attribute_type: select({
            options: [
                { value: 'text', label: 'text' },
                { value: 'list', label: 'list' },
                { value: 'number', label: 'number' },
            ],
            ui: {
                displayMode: 'segmented-control',
            },
        }),
    },
});

export default attributeTypeList;