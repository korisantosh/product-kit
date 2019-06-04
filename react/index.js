import React, { Component } from 'react'
import { Slider, Container } from 'vtex.store-components'
import { FormattedMessage } from 'react-intl'
import { path } from 'ramda'

import ProductKitContent from './components/ProductKitContent'
import { schema } from './schema/index'
import { propTypes, defaultProps } from './props/index'

import styles from './styles.css'
import './global.css'

/** Slick slider should display at most one Product Kit per time */
const KITS_PER_TIME = 1

/**
 * ProductKit component.
 * Display a list of Kits of Products inside a Slick Slider component.
 */
export default class ProductKit extends Component {
  static getSchema = schema

  static propTypes = propTypes

  static defaultProps = defaultProps

  render() {
    const {
      showArrows,
      prevArrow,
      nextArrow,
      showDots,
      dots,
      showListPrice,
      showLabel,
      showInstallments,
      showBadge,
      badgeText,
      showCollections,
      allowSwap,
      allowRemoval,
      productQuery,
    } = this.props
    const { product, loading } = productQuery || {}
    const productKitList = path(['benefits'], product)

    /** The product does not have any kit of products associated with it,
     * in this case the component should not be rendered */
    if (loading || (!productKitList || !productKitList.length)) {
      return null
    }

    /** The component should be displayed only in large screens for a while */
    return (
      <Container className={`${styles.listContainer} dn db-ns flex-column`}>
        <div className="t-heading-3 c-muted-1 fw3 mv4 flex items-center justify-center">
          <FormattedMessage id="store/productKitList.buildYourBundle" />
        </div>
        <Slider
          leftArrowClasses="z-2"
          dotsClasses="top-0 relative f6"
          sliderSettings={{
            arrows: showArrows,
            prevArrow,
            nextArrow,
            dots: showDots,
            appendDots: dots,
            slidesToShow: KITS_PER_TIME,
          }}
        >
          {productKitList.map((productKit, index) => (
            <ProductKitContent
              key={index}
              baseProduct={product}
              productKit={productKit}
              allowSwap={allowSwap}
              allowRemoval={allowRemoval}
              summaryProps={{
                showListPrice,
                showLabel,
                showInstallments,
                showBadge,
                badgeText,
                showCollections,
              }}
            />
          ))}
        </Slider>
      </Container>
    )
  }
}
