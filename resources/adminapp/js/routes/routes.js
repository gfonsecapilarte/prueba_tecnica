import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const View = { template: '<router-view></router-view>' }

const routes = [
  {
    path: '/',
    component: () => import('@pages/Layout/DashboardLayout.vue'),
    redirect: 'dashboard',
    children: [
      {
        path: 'dashboard',
        name: 'dashboard',
        component: () => import('@pages/Dashboard.vue'),
        meta: { title: 'global.dashboard' }
      },
      {
        path: 'user-management',
        name: 'user_management',
        component: View,
        redirect: { name: 'permissions.index' },
        children: [
          {
            path: 'permissions',
            name: 'permissions.index',
            component: () => import('@cruds/Permissions/Index.vue'),
            meta: { title: 'cruds.permission.title' }
          },
          {
            path: 'permissions/create',
            name: 'permissions.create',
            component: () => import('@cruds/Permissions/Create.vue'),
            meta: { title: 'cruds.permission.title' }
          },
          {
            path: 'permissions/:id',
            name: 'permissions.show',
            component: () => import('@cruds/Permissions/Show.vue'),
            meta: { title: 'cruds.permission.title' }
          },
          {
            path: 'permissions/:id/edit',
            name: 'permissions.edit',
            component: () => import('@cruds/Permissions/Edit.vue'),
            meta: { title: 'cruds.permission.title' }
          },
          {
            path: 'roles',
            name: 'roles.index',
            component: () => import('@cruds/Roles/Index.vue'),
            meta: { title: 'cruds.role.title' }
          },
          {
            path: 'roles/create',
            name: 'roles.create',
            component: () => import('@cruds/Roles/Create.vue'),
            meta: { title: 'cruds.role.title' }
          },
          {
            path: 'roles/:id',
            name: 'roles.show',
            component: () => import('@cruds/Roles/Show.vue'),
            meta: { title: 'cruds.role.title' }
          },
          {
            path: 'roles/:id/edit',
            name: 'roles.edit',
            component: () => import('@cruds/Roles/Edit.vue'),
            meta: { title: 'cruds.role.title' }
          },
          {
            path: 'users',
            name: 'users.index',
            component: () => import('@cruds/Users/Index.vue'),
            meta: { title: 'cruds.user.title' }
          },
          {
            path: 'users/create',
            name: 'users.create',
            component: () => import('@cruds/Users/Create.vue'),
            meta: { title: 'cruds.user.title' }
          },
          {
            path: 'users/:id',
            name: 'users.show',
            component: () => import('@cruds/Users/Show.vue'),
            meta: { title: 'cruds.user.title' }
          },
          {
            path: 'users/:id/edit',
            name: 'users.edit',
            component: () => import('@cruds/Users/Edit.vue'),
            meta: { title: 'cruds.user.title' }
          }
        ]
      },
      {
        path: 'product-management',
        name: 'product_management',
        component: View,
        redirect: { name: 'product_categories.index' },
        children: [
          {
            path: 'product-categories',
            name: 'product_categories.index',
            component: () => import('@cruds/ProductCategories/Index.vue'),
            meta: { title: 'cruds.productCategory.title' }
          },
          {
            path: 'product-categories/create',
            name: 'product_categories.create',
            component: () => import('@cruds/ProductCategories/Create.vue'),
            meta: { title: 'cruds.productCategory.title' }
          },
          {
            path: 'product-categories/:id',
            name: 'product_categories.show',
            component: () => import('@cruds/ProductCategories/Show.vue'),
            meta: { title: 'cruds.productCategory.title' }
          },
          {
            path: 'product-categories/:id/edit',
            name: 'product_categories.edit',
            component: () => import('@cruds/ProductCategories/Edit.vue'),
            meta: { title: 'cruds.productCategory.title' }
          },
          {
            path: 'product-tags',
            name: 'product_tags.index',
            component: () => import('@cruds/ProductTags/Index.vue'),
            meta: { title: 'cruds.productTag.title' }
          },
          {
            path: 'product-tags/create',
            name: 'product_tags.create',
            component: () => import('@cruds/ProductTags/Create.vue'),
            meta: { title: 'cruds.productTag.title' }
          },
          {
            path: 'product-tags/:id',
            name: 'product_tags.show',
            component: () => import('@cruds/ProductTags/Show.vue'),
            meta: { title: 'cruds.productTag.title' }
          },
          {
            path: 'product-tags/:id/edit',
            name: 'product_tags.edit',
            component: () => import('@cruds/ProductTags/Edit.vue'),
            meta: { title: 'cruds.productTag.title' }
          },
          {
            path: 'products',
            name: 'products.index',
            component: () => import('@cruds/Products/Index.vue'),
            meta: { title: 'cruds.product.title' }
          },
          {
            path: 'products/create',
            name: 'products.create',
            component: () => import('@cruds/Products/Create.vue'),
            meta: { title: 'cruds.product.title' }
          },
          {
            path: 'products/:id',
            name: 'products.show',
            component: () => import('@cruds/Products/Show.vue'),
            meta: { title: 'cruds.product.title' }
          },
          {
            path: 'products/:id/edit',
            name: 'products.edit',
            component: () => import('@cruds/Products/Edit.vue'),
            meta: { title: 'cruds.product.title' }
          }
        ]
      },
      {
        path: 'basic-c-r-m',
        name: 'basic_c_r_m',
        component: View,
        redirect: { name: 'crm_statuses.index' },
        children: [
          {
            path: 'crm-statuses',
            name: 'crm_statuses.index',
            component: () => import('@cruds/CrmStatuses/Index.vue'),
            meta: { title: 'cruds.crmStatus.title' }
          },
          {
            path: 'crm-statuses/create',
            name: 'crm_statuses.create',
            component: () => import('@cruds/CrmStatuses/Create.vue'),
            meta: { title: 'cruds.crmStatus.title' }
          },
          {
            path: 'crm-statuses/:id',
            name: 'crm_statuses.show',
            component: () => import('@cruds/CrmStatuses/Show.vue'),
            meta: { title: 'cruds.crmStatus.title' }
          },
          {
            path: 'crm-statuses/:id/edit',
            name: 'crm_statuses.edit',
            component: () => import('@cruds/CrmStatuses/Edit.vue'),
            meta: { title: 'cruds.crmStatus.title' }
          },
          {
            path: 'crm-customers',
            name: 'crm_customers.index',
            component: () => import('@cruds/CrmCustomers/Index.vue'),
            meta: { title: 'cruds.crmCustomer.title' }
          },
          {
            path: 'crm-customers/create',
            name: 'crm_customers.create',
            component: () => import('@cruds/CrmCustomers/Create.vue'),
            meta: { title: 'cruds.crmCustomer.title' }
          },
          {
            path: 'crm-customers/:id',
            name: 'crm_customers.show',
            component: () => import('@cruds/CrmCustomers/Show.vue'),
            meta: { title: 'cruds.crmCustomer.title' }
          },
          {
            path: 'crm-customers/:id/edit',
            name: 'crm_customers.edit',
            component: () => import('@cruds/CrmCustomers/Edit.vue'),
            meta: { title: 'cruds.crmCustomer.title' }
          },
          {
            path: 'crm-notes',
            name: 'crm_notes.index',
            component: () => import('@cruds/CrmNotes/Index.vue'),
            meta: { title: 'cruds.crmNote.title' }
          },
          {
            path: 'crm-notes/create',
            name: 'crm_notes.create',
            component: () => import('@cruds/CrmNotes/Create.vue'),
            meta: { title: 'cruds.crmNote.title' }
          },
          {
            path: 'crm-notes/:id',
            name: 'crm_notes.show',
            component: () => import('@cruds/CrmNotes/Show.vue'),
            meta: { title: 'cruds.crmNote.title' }
          },
          {
            path: 'crm-notes/:id/edit',
            name: 'crm_notes.edit',
            component: () => import('@cruds/CrmNotes/Edit.vue'),
            meta: { title: 'cruds.crmNote.title' }
          },
          {
            path: 'crm-documents',
            name: 'crm_documents.index',
            component: () => import('@cruds/CrmDocuments/Index.vue'),
            meta: { title: 'cruds.crmDocument.title' }
          },
          {
            path: 'crm-documents/create',
            name: 'crm_documents.create',
            component: () => import('@cruds/CrmDocuments/Create.vue'),
            meta: { title: 'cruds.crmDocument.title' }
          },
          {
            path: 'crm-documents/:id',
            name: 'crm_documents.show',
            component: () => import('@cruds/CrmDocuments/Show.vue'),
            meta: { title: 'cruds.crmDocument.title' }
          },
          {
            path: 'crm-documents/:id/edit',
            name: 'crm_documents.edit',
            component: () => import('@cruds/CrmDocuments/Edit.vue'),
            meta: { title: 'cruds.crmDocument.title' }
          }
        ]
      }
    ]
  }
]

export default new VueRouter({
  mode: 'history',
  base: '/admin',
  routes
})
