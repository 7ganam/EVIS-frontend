## Requirements

Make sure that you have the last stable [NodeJS](https://nodejs.org/en/download/) and `yarn` version.

- Do not delete the `yarn.lock file`

## Install

Navigate to the project root folder using terminal and install the dependencies.

```js
yarn;
```

## Start

After the installation is complete, you can launch dev server by running.

```js
yarn dev
```

This starts a local webserver at `http://localhost:3000` and auto detect file changes:

## Build

```js
yarn build
```

## Folder structure

```ts
bazar-react/
├── public/
|   └── assets/
|       └── images/
├── pages/
    ├── address
    ├── admin
    ├── orders
    ├── payment-methods
    ├── product
    ├── profile
    ├── shops
    ├── support
    ├── 50+ Other pages
├── src/
|   ├── animations
|   ├── components/
|   |   ├── layouts
|   |   |   ├── customer-dashboard
|   |   |   ├── vendor-dashboard
|   |   |   └── And shop layouts
|   |   └── Includes reusable atomic components
|   ├── contexts
|   ├── data
|   ├── fake-db
|   ├── hooks
|   ├── page-sections
|   |   └── Includes bigger components (Individual every pages sections compoents)
|   ├── theme
|   ├── utils
└── README.md
```

## Pages/Routing

Bazar react follows [Next.js routing standard](https://nextjs.org/docs/routing/introduction).
All the routes/pages are inside `pages` folder.

## Compnents

Component structure are straight forward.

- Reusable atomic components are located in `src/components/`
- Bigger static components are located in `src/page-sections`
  - Static component means, these components has static data which you may want to modify

## Shop Layouts

All the shop layouts are inside `src/components/layouts`
Layout headers are located in `src/components/header`

## Shop Navigation

- Shop horizontal navbar navigation data is stored in `src/data/navbarNavigations.ts`
- Category dropdown navigation data is stored in `src/data/navigations.ts`

## Admin Dashboard

- Admin dashboard pages are inside `pages/admin`.
- Admin dashboard layout components are inside `src/components/layouts/vendor-dashboard`

### Admin Navigaiton

- Admin navigation data is stored in `src/components/layouts/vendor-dashboard/NavigationList.tsx`.

### Theme

- `theme/MuiTheme.tsx` is the main theme file.
- `theme/themeColors.ts` Contains theme colors (Primary, Secondary & etc.)
- `theme/components.js` Overrides the MUI default component styles
- `theme/typography.ts` Sets fontFamily and fontSize

#### Existing color themes

We have multiple color theme for different shops. E.G. Default, Grocery, Health & etc.
`themeOptions.ts` file returns one color theme based on currently displayed demo on browser(by detecting url path)

Of course you don't need this.
You can delete `themeOptions.ts` file and rename `themeOptionsSample.ts` to `themeOptions.ts`

Now `themeOptions.ts` file will always return one color theme.

### RTL

Open `src/contexts/SettingContext.tsx` and change the value of direction to 'rtl'
`const initialSettings: SettingsOptions = { direction: "rtl" };`

## REST API

- REST API calls are located in `src/utils/api`

## Fake server

- REST APIs are getting data from dummy server located in `src/fake-db/server`
- This server serves dummy data. You need to implement your own server.

## Navbar Menus Structure

```ts
const navbarNavigations = [
  {
    title: "Home",
    megaMenu: false,
    megaMenuWithSub: false,
    child: [
      { title: "Super Store", url: "/superstore-shop" },
      { title: "Furniture", url: "/furniture-shop" },
      { title: "Grocery-v1", url: "/grocery1" },
      { title: "Grocery-v2", url: "/grocery2" },
      { title: "Grocery-v3", url: "/grocery3" },
      { title: "Health and Beauty", url: "/healthbeauty-shop" },
      { title: "Fashion", url: "/fashion-shop" },
      { title: "Gift Store", url: "/gift-shop" },
      { title: "Gadget", url: "/gadget-shop" },
    ],
  },

  {
    megaMenu: true,
    megaMenuWithSub: false,
    title: "All Demos",
    child: megaMenus,
  },
  {
    megaMenu: false,
    megaMenuWithSub: true,
    title: "Categories",
    child: categoriesMegaMenu,
  },
];
```

## Mega Menu Structure

```ts
const megaMenus = [
  [
    {
      title: "Grocery",
      child: [
        { title: "Grocery-v1", url: "/grocery1" },
        { title: "Grocery-v2", url: "/grocery2" },
        { title: "Grocery-v3", url: "/grocery3" },
      ],
    },
    {
      title: "Others",
      child: [
        { title: "Health and Beauty", url: "/healthbeauty-shop" },
        { title: "Fashion", url: "/fashion-shop" },
        { title: "Gift Store", url: "/gift-shop" },
        { title: "Gadget", url: "/gadget-shop" },
      ],
    },
  ],
];
```

## Categories With Sub Categories Mega Menus Structure

```ts
const categoriesMegaMenu = [
  {
    title: "Fashion",
    child: [
      {
        title: "Men's Fashion",
        child: [
          { title: "T-Shirt", url: "#", Icon: Icons.Shirt },
          { title: "Shirt", url: "#", Icon: Icons.Shirt },
          { title: "Shoes", url: "#", Icon: Icons.Shirt },
          { title: "Jeans Pant", url: "#", Icon: Icons.Shirt },
          { title: "Gabardin Pant", url: "#", Icon: Icons.Shirt },
          { title: "Formal Pant", url: "#", Icon: Icons.Shirt },
          { title: "Formal Shirt", url: "#", Icon: Icons.Shirt },
          { title: "Sunglass", url: "#", Icon: Icons.Shirt },
        ],
      },
      {
        title: "Women's Fashion",
        child: [
          { title: "Clothing", url: "#" },
          { title: "Shoes", url: "#" },
          { title: "Jewelry", url: "#" },
          { title: "Watches", url: "#" },
          { title: "Hand Bags", url: "#" },
          { title: "Accessories", url: "#" },
          { title: "Makeup", url: "#" },
        ],
      },

      {
        title: "Girls' Fashion",
        child: [
          { title: "Clothing", url: "#" },
          { title: "Shoes", url: "#" },
          { title: "Jewelry", url: "#" },
          { title: "Watches", url: "#" },
          { title: "Hand Bags", url: "#" },
          { title: "Gadget", url: "#" },
        ],
      },
    ],
  },
];
```

## Support

Need Support? Create a ticket [HERE](https://support.ui-lib.com/help-center/tickets/new) Or Send us an email at [support@ui-lib.com](mailto:support@ui-lib.com).

### changelog

## v3.0.0

###### June 16, 2022

- Add Admin/Vendor dashboard (25+ pages)
- Add RTL Support
- Update npm packages

## v2.3.0

###### April 18, 2022

- Fix Build issue (added resolutions &amp; overrides in package.json)

## v2.2.0

###### March 21, 2022

- Fix Eslint errors

## v2.1.0

###### Dec 28, 2021

- Add 5 new store front variations
- Fix small UI issues

## v2.0.0

###### Oct 28, 2021

- Add JavaScript version
- Add REST API to Grocery shop
- Update to Next.js v12 and MUI v5.

## v1.2.0

###### Aug 25, 2021

- Migrate makeStyles API to v5
- Fix next/image issues
- Add new page &quot;Shop v4&quot;

## v1.1.0

###### Aug 12, 2021

- Add new page &quot;Shop v3&quot;

## v1.0.1

###### Aug 1, 2021

- Fix dashboard mobile navigation

## v1.0.0

###### Jul 1, 2021

Initial release

### Roadmap

1. More funcional cart, cookie
2. List of all APIs/Functions

```

```
