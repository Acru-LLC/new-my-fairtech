import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'dashboard',
        // meta: {
        //     public: true,
        // },
        component: () => import('./views/dashboards/dashboard'),
        children: []
    },
    {
        path: '/murojaat',
        name: 'MurojaatCreate',
        // meta: {
        //     public: true,
        // },
        component: () => import('/src/modules/appeal/MurojatMonitor.vue'),
        children: []
    },
    {
        path: '/privacy-policy',
        name: 'PrivacyPolicy',
        // meta: {
        //     public: true,
        // },
        component: () => import('/src/modules/policy/Index.vue'),
        children: []
    },
    {
        path: '/fair-price',
        name: 'FairPrice',
        // meta: {
        //     public: true,
        // },
        component: () => import('/src/modules/fair-price/Main.vue'),
        children: []
    },
    {
        path: '/fair-price-stations',
        name: 'FairPriceStations',
        // meta: {
        //     public: true,
        // },
        component: () => import('/src/modules/fair-price/stations/Index1.vue'),
        children: []
    },
    {
        path: '/online-watching',
        name: 'OnlineWatching',
        // meta: {
        //     public: true,
        // },
        component: () => import('/src/modules/online-watching/onlineWatching.vue'),
        children: []
    },
    {
        path: '/court-online',
        name: 'CourtOnline',
        // meta: {
        //     public: true,
        // },
        component: () => import('/src/modules/court-online/onlineSudQarori.vue'),
        children: []
    },
    {
        path: '/court-table',
        name: 'CourtTable',
        // meta: {
        //     public: true,
        // },
        component: () => import('/src/modules/court-table/region.vue'),
        children: []
    },
    {
        path: '/online-kuzatuv',
        name: 'OnlineKuzatuv',
        // meta: {
        //     public: true,
        // },
        component: () => import('/src/modules/online-kuzatuv/index.vue'),
        children: []
    },
    {
        path: '/sud-xabarnomasi',
        name: 'SudXabarnomasi',
        // meta: {
        //     public: true,
        // },
        component: () => import('/src/modules/sud-xabarnomasi/index.vue'),
        children: []
    },
    {
        path: '/product-services',
        name: 'ProductInfoServices',
        // meta: {
        //     public: true
        // },
        component: () => import('/src/modules/product/index.vue'),
        children: []
    },
    {
        path: '/tovar-mahsulot',
        name: 'TovarMahsulot',
        // meta: {
        //     public: true
        // },
        component: () => import('/src/modules/product/serviceMahsulot.vue'),
        children: []
    },
    {
        path: '/ish-xizmatlar',
        name: 'IshXizmatlar',
        // meta: {
        //     public: true
        // },
        component: () => import('/src/modules/product/serviceXizmat.vue'),
        children: []
    },
    {
        path: '/online-report',
        name: 'OnlineReport',
        // meta: {
        //     public: true
        // },
        component: () => import('/src/modules/reporting/menu/Index.vue'),
        children: []
    },
    {
        path: '/faq',
        name: 'FAQ',
        // meta: {
        //     public: true
        // },
        component: () => import('/src/modules/product/FAQ/index.vue'),
        children: []
    },
    {
        path: '*',
        component: () => import('../modules/views/Error.vue'),
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
