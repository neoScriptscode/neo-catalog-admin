import { text, timestamp, relationship } from '@keystone-next/fields';
import { list } from '@keystone-next/keystone/schema';

const productTypeAttributeList = list({
    ui: {
        listView: {
            initialColumns: ['created_at', 'product_type', 'attribute'],
        },
    },

    fields: {
        created_at: timestamp({ defaultValue: Date() }),
        updated_at: timestamp(),
        deleted_at: timestamp({ isRequired: false }), // the deleted_at fiels is used for soft deletes  
        is_deleted: text({ isRequired: true, defaultValue: 'false' }),
        product_type: relationship({ ref: 'ProductType', many: true }),
        attribute: relationship({ ref: 'Attribute' }),
    },
});

export default productTypeAttributeList;