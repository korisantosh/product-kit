# VTEX Product Kit

## Description
The VTEX product kit app shows two or more products as a kit. Usually these products are sold together and offer a discount. This app is used by store theme.

:loudspeaker: **Disclaimer:** Don't fork this project, use, contribute, or open issue with your feature request.

## Release schedule
| Release  | Status              | Initial Release | Maintenance LTS Start | End-of-life | Dreamstore Compatibility
| :--:     | :---:               |  :---:          | :---:                 | :---:       | :---: 
| [1.x]    | **Current Release** |  2018-11-05     |                       |             | 2.x
| [0.x]    | **Maintenance LTS** |  2018-07-06     | 2018-11-05            | March 2019  | 1.x

See our [LTS policy](https://github.com/vtex-apps/awesome-io#lts-policy) for more information.

## Table of Contents
- [Usage](#usage)
  - [Blocks API](#blocks-api)
    - [Configuration](#configuration)
  - [Styles API](#styles-api)
    - [CSS namespaces](#css-namespaces)
- [Troubleshooting](#troubleshooting)
- [Tests](#tests)

## Usage
This app uses our store builder with the blocks architecture. To know more about Store Builder [click here.](https://help.vtex.com/en/tutorial/understanding-storebuilder-and-stylesbuilder#structuring-and-configuring-our-store-with-object-object)

We add the product-kit as a block in our [Store](https://github.com/vtex-apps/store/blob/master/store/interfaces.json).

To configure or customize this app, you need to import it in your dependencies in `manifest.json`.

```json
  dependencies: {
    "vtex.product-kit": "1.x"
  }
```

Then, add `product-kit` block into our app theme as we do in our [Store theme app](https://github.com/vtex-apps/store-theme/blob/master/store/blocks.json).  

Now, you can change the behavior of the `product-kit` block. See an example of how to configure: 
```json
"product-kit": {
    "blocks": [
      "product-summary"
    ],
    "props":{
      "showArrows": true,
      "nextArrow": "next",
      "prevArrow": "prev",
      "showDots": true,
      "dots": "dots",
      "showListPrice": true,
      "showLabel": true,
      "showInstallments": true,
      "showBadge": true,
      "badgeText": "badge",
      "showCollections": true,
      "allowSwap": true,
      "allowRemoval": true,
    }
  }
```
### Blocks API
This app has an interface that describes what rules must be implemented by a block when you want to use the product kit.
```json
  "product-kit": {
    "required": [
      "product-summary"
    ],
    "component": "index"
  }
}
```

The product kit has as a required block the `product-summary`. So, any product kit block implementation created must add a product-summary as a block that is inside of product kit. (Similarly, `product-summary` has its own inner block structure that can be configured. There is a link to its API in the next section.)

### Configuration
Through the Storefront you can change the behavior and interface of `ProductKit`. But, you can also make adjusts in your theme app, like Store does.

| Prop name          | Type              | Description                                   | Default Value |
| ------------------ | ----------------- | --------------------------------------------- |-------------- |
| `showArrows`       | `Boolean`         | Show or not the arrows                        | true |
| `nextArrow`        | `String`          | Next arrow icon                               | `''` |
| `prevArrow`        | `String`          | Previous arrow icon                           | `''` |
| `showDots`         | `Boolean`          | Show or not the dots                          | true |
| `dots`             | `String`          | Dots icon                                     | `''` |
| `showListPrice`    | `Boolean`         | Show or not the list price                    | true |
| `showLabels`        | `Boolean`         | Show or not the labels "from" and "to"        | false |
| `showInstallments` | `Boolean`         | Show or not the installments                  | false |
| `showBadge`        | `Boolean`         | Show or not the discount badge                | false |
| `badgeText`        | `String`          | Text of the discount badge                    | `Texto da badge/Badge Text/Texto de badge` |
| `showCollections`  | `Boolean`         | Show or not the collections badges            | true |
| `allowSwap`        | `Boolean`         | Allow or not the item swap                    | true |
| `allowRemoval`     | `Boolean`         | Allow or not the item removal                 | true |

Also, you can configure the product summary that is defined on minicart. See [here](https://github.com/vtex-apps/product-summary/blob/master/README.md#configuration) the Product Summary API. 

### Styles API

This app provides some CSS classes as an API for style customization.

To use this CSS API, you must add the `styles` builder and create an app styling CSS file.

1. Add the `styles` builder to your `manifest.json`:

```json
  "builders": {
    "styles": "1.x"
  }
```

2. Create a file called `vtex.product-kit.css` inside the `styles/css` folder. Add your custom styles:

```css
.container {
  margin-top: 10px;
}
```
#### CSS namespaces
Below, we describe the namespaces that are define in the `ProductKit`.

| Class name         |    Description     |  Component Source                                           |
| ------------------ | ----------         |------------------------------------------------------- |
| `container`        |  A wrapper that envolves all the elements of the product kit, responsible for the main margins and paddings                        | [ProductKitContent](/react/components/ProductKitContent.js) |
| `listContainer`        |  The container for the products and final prices                        | [index](/react/index.js) |
| `listDetails`        |  The container for the total price of the kit                        | [ListDetails](/react/components/ProductKitDetails.js) |
| `item`        |  The container of one product                        | [ProductKitItem](/react/components/ProductKitItem.js) |

## Troubleshooting
You can check if others are passing through similar issues [here](https://github.com/vtex-apps/product-kit/issues). Also feel free to [open issues](https://github.com/vtex-apps/product-kit/issues/new) or contribute with pull requests.

## Tests
:construction: :construction: :construction: