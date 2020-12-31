import React from "react"
import { Helmet } from "react-helmet"

import Budicon from "../assets/svg/budicon.svg";
import MobileIcon from "../assets/svg/mobile-icon.svg";
import WeworkLogo from "../assets/svg/wework-logo.svg";
import Close from "../assets/svg/close.svg";
import HeartIcon from "../assets/svg/heart-icon.svg";
import User from "../assets/svg/user.svg";
import CloseIcon from "../assets/svg/close-icon.svg";
import Pin from "../assets/svg/pin.svg";
import ArrowLeft from "../assets/svg/arrow-left.svg";
import ArrowRight from "../assets/svg/arrow-right.svg";

import "../styles/vendor.css"
import "../styles/main-styles.css"

export default function Home() {
  return (
    <>
      <Helmet>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta httpequiv="content-type" content="text/html" />

        <title>WeWork | Office Space and Workspace Solutions</title>

        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,400;0,600;1,700&family=Lato:wght@400;700&display=swap" rel="stylesheet" />

        <script src="https://tempwework.netlify.app/scripts/script.js"></script>
        <script src="https://tempwework.netlify.app/scripts/chunk.js"></script>

      </Helmet>
      <header></header>

      <main>
        <div className="wework-alerts-container">
          <div className="wework-page-alert hidden">
            <div className="ray-page-container">
              <div className="ray-grid inner">
                <div
                  className="ray-grid__cell--span-11-desktop ray-grid__cell--span-7-tablet ray-grid__cell--span-3-phone copy-wrapper">
                  <a className="wework-alert-copy sl_norewrite ray-text--body-small" href="weworkawesome.netlify.app" target="_blank">WeWork's response to COVID-19</a>
                </div>
                <div
                  className="ray-grid__cell--span-1-desktop ray-grid__cell--span-1-tablet ray-grid__cell--span-1-phone  exit-wrapper">
                  <div className="wework-page-alert-exit">
                    <Budicon />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <nav className="page-nav" dir="ltr">
          <div className="ray-page-container">
            <div className="inner">
              <div className="mobile-menu-toggle-container">
                <div id="mobile-menu-open" className="mobile-menu-toggle" role="button" tabIndex="0">
                  <MobileIcon />
                </div>
              </div>
              <div className="logo">
                <a href="weworkawesome.netlify.app" className="sl_norewrite"> <WeworkLogo /> </a> </div>

              <div className="menu-wrapper">
                <div className="ray-page-container mobile-menu-item">
                  <div className="mobile-menu-header">
                    <div className="mobile-menu-toggle-container">
                      <div className="mobile-menu-toggle mobile-menu-close" id="mobile-menu-close" role="button"
                        tabIndex="0">
                        <Close />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="menu-items-list">
                  <ul className="menu">
                    <li className="item mobile-menu-item">
                      <a href="weworkawesome.netlify.app" className="sl_norewrite">Home</a></li>
                    <li className="item">
                      <a href="weworkawesome.netlify.app" className="track-nav-link-click">Locations</a></li>
                    <li className="item">
                      <a href="weworkawesome.netlify.app" className="track-nav-link-click">Workspace</a></li>
                    <li className="item">
                      <a href="weworkawesome.netlify.app" className="track-nav-link-click">Enterprise</a></li>
                    <li className="item">
                      <a href="weworkawesome.netlify.app" className="track-nav-link-click">Ideas</a></li>
                    <li className="item mobile-menu-item">
                      <a href="weworkawesome.netlify.app" className="track-nav-link-click">Saved</a></li>
                    <li className="item mobile-menu-item">
                      <a href="weworkawesome.netlify.app">Log In</a></li>
                  </ul>
                </div>
                <div className="ray-page-container mobile-menu-item">
                  <div className="nav-questions">Have questions or need help?</div>
                  <a className="support-phone-number" href="weworkawesome.netlify.app">1800123365365</a>
                </div>
              </div>

              <div className="saved-link">
                <a href="weworkawesome.netlify.app" className="track-nav-link-click" aria-label="My saved"> Saved <HeartIcon />
                </a> </div>

              <div className="contact-us">
                <a href="weworkawesome.netlify.app" className="track-nav-link-click" aria-label="Contact Us">Contact
                        Us</a>
              </div>

              <div className="nav-login">
                <a className="nav-login-cta" href="weworkawesome.netlify.app">
                  <span className="nav-login-cta__text">Log In</span>
                  <User /> </a>
              </div>
            </div>
          </div>
        </nav>

        <div className="notification-card-container hidden">
          <a className="notification-card" href="weworkawesome.netlify.app">
            <div className="notification-card-image-container">
              <div className="ray-image ray-image--1by1">
                <img src="#" alt="card graphic" />
              </div>
            </div>

            <div className="notification-card-content">
              <div className="selection-card-content__top">
                <div className="selection-card-product-info-container">
                  <div className="notification-card-product-type">Pick up where you left off</div>
                  <div className="selection-card-product-description"></div>
                  <div className="notification-card-building-name"></div>
                </div>
                <div tabIndex="0" className="notification-close-btn-container" role="button">
                  <CloseIcon /> </div>
              </div>
            </div>
          </a>

        </div>

        <div id="home" className="home ray-page-container">
          <section className="home-hero__section ray-grid">
            <div className="home-hero__mobile-text ray-show-small-mobile ray-grid__cell--span-4 notranslate">
              <h1 className="ray-text--h1">
                Reimagine your workspace
                </h1>
            </div>

            <div
              className="home-hero__left-container ray-grid__cell--span-4-desktop ray-grid__cell--span-6-tablet ray-grid__cell--span-4-phone">
              <div className="ray-show-tablet ray-show-desktop notranslate">
                <h1 className="ray-text--h1">
                  Reimagine your workspace
                    </h1>
                <p className="ray-text--body">
                  Whether you’re an established enterprise or a growing startup, discover flexible spaces and
                  solutions to
                  move your business forward.
                    </p>
              </div>

              <form className="home-hero__form-segmentation" id="hero-form">
                <div className="ray-form-item">
                  <div className="ray-select ray-select--with-icon-left ray-select--has-value"
                    id="locations-dropdown-select__container">
                    <div className="ray-select__icon--start">
                      <Pin />
                    </div>

                    {/* <label className="ray-select__label" for="locations-dropdown">
                      <input>Find Workspace In</input></label> */}
                    <select className="ray-select__input" id="locations-dropdown">
                      <option data-ray-placeholder="" disabled="" value="">
                        Choose a location
                                </option>
                      <optgroup label="United States">
                        <option data-market-path="/l/atlanta--GA">Atlanta
                                    </option>
                        <option data-market-path="/l/austin--TX">Austin</option>
                        <option data-market-path="/l/boston--MA">Boston</option>
                        <option data-market-path="/l/boulder">Boulder</option>
                        <option data-market-path="/l/charlotte">Charlotte
                                    </option>
                        <option data-market-path="/l/chicago--IL">Chicago
                                    </option>
                        <option data-market-path="/l/college-park-md--MD">College
                                        Park, MD</option>
                        <option data-market-path="/l/columbus">Columbus</option>
                        <option data-market-path="/l/dallas-fort-worth--TX">
                          Dallas - Fort Worth</option>
                        <option data-market-path="/l/denver--CO">Denver</option>
                        <option data-market-path="/l/detroit--MI">Detroit
                                    </option>
                        <option data-market-path="/l/houston--TX">Houston
                                    </option>
                        <option data-market-path="/l/kansas-city">Kansas City
                                    </option>
                        <option data-market-path="/l/las-vegas">Las Vegas
                                    </option>
                        <option data-market-path="/l/los-angeles--CA">Los Angeles
                                    </option>
                        <option data-market-path="/l/miami--FL">Miami</option>
                        <option data-market-path="/l/minneapolis">Minneapolis
                                    </option>
                        <option data-market-path="/l/nashville">Nashville
                                    </option>
                        <option data-market-path="/l/new-york-city--NY">New York
                                        City</option>
                        <option data-market-path="/l/orange-county--CA">Orange
                                        County</option>
                        <option data-market-path="/l/philadelphia--PA">
                          Philadelphia</option>
                        <option data-market-path="/l/phoenix">Phoenix</option>
                        <option data-market-path="/l/portland--OR">Portland
                                    </option>
                        <option data-market-path="/l/raleigh-durham--NC">
                          Raleigh-Durham</option>
                        <option data-market-path="/l/sacramento--CA">Sacramento
                                    </option>
                        <option data-market-path="/l/salt-lake-city">Salt Lake
                                        City</option>
                        <option data-market-path="/l/san-diego--CA">San Diego
                                    </option>
                        <option data-market-path="/l/seattle--WA">Seattle
                                    </option>
                        <option data-market-path="/l/sf-bay-area--CA">SF Bay Area
                                    </option>
                        <option data-market-path="/l/st-louis">St. Louis</option>
                        <option data-market-path="/l/tampa--FL">Tampa</option>
                        <option data-market-path="/l/washington-DC">Washington,
                                        D.C.</option>
                        <option disabled="">──────────</option>
                      </optgroup>
                      <optgroup label="Argentina">
                        <option data-market-path="/l/buenos-aires">Buenos Aires
                                    </option>
                      </optgroup>
                      <optgroup label="Australia">
                        <option data-market-path="/l/brisbane--QLD">Brisbane
                                    </option>
                        <option data-market-path="/l/melbourne">Melbourne
                                    </option>
                        <option data-market-path="/l/perth--WA">Perth</option>
                        <option data-market-path="/l/sydney--NSW">Sydney</option>
                      </optgroup>
                      <optgroup label="Belgium">
                        <option data-market-path="/l/brussels">Brussels</option>
                      </optgroup>
                      <optgroup label="Brazil">
                        <option data-market-path="/l/belo-horizonte">Belo
                                        Horizonte</option>
                        <option data-market-path="/l/brasilia--DF">Brasilia
                                    </option>
                        <option data-market-path="/l/porto-alegre">Porto Alegre
                                    </option>
                        <option data-market-path="/l/rio-de-janeiro">Rio de
                                        Janeiro</option>
                        <option data-market-path="/l/sao-paulo">São Paulo
                                    </option>
                      </optgroup>
                      <optgroup label="Canada">
                        <option data-market-path="/l/calgary">Calgary</option>
                        <option data-market-path="/l/montreal--QC">Montreal
                                    </option>
                        <option data-market-path="/l/toronto">Toronto</option>
                        <option data-market-path="/l/vancouver">Vancouver
                                    </option>
                      </optgroup>
                      <optgroup label="Chile">
                        <option data-market-path="/l/santiago-de-chile">Santiago
                                        de Chile</option>
                      </optgroup>
                      <optgroup label="Colombia">
                        <option data-market-path="/l/barranquilla">Barranquilla
                                    </option>
                        <option data-market-path="/l/bogota">Bogotá</option>
                        <option data-market-path="/l/medellin">Medellín</option>
                      </optgroup>
                      <optgroup label="Costa Rica">
                        <option data-market-path="/l/san-jose--costa-rica">San
                                        José</option>
                      </optgroup>
                      <optgroup label="Czech Republic">
                        <option data-market-path="/l/prague">Prague</option>
                      </optgroup>
                      <optgroup label="France">
                        <option data-market-path="/l/paris">Paris</option>
                      </optgroup>
                      <optgroup label="Germany">
                        <option data-market-path="/l/berlin">Berlin</option>
                        <option data-market-path="/l/cologne">Cologne</option>
                        <option data-market-path="/l/frankfurt">Frankfurt
                                    </option>
                        <option data-market-path="/l/hamburg">Hamburg</option>
                        <option data-market-path="/l/munich">Munich</option>
                      </optgroup>
                      <optgroup label="Greater China">
                        <option data-market-path="/l/beijing">Beijing</option>
                        <option data-market-path="/l/chengdu">Chengdu</option>
                        <option data-market-path="/l/guangzhou">Guangzhou
                                    </option>
                        <option data-market-path="/l/hangzhou">Hangzhou</option>
                        <option data-market-path="/l/hong-kong">Hong Kong
                                    </option>
                        <option data-market-path="/l/nanjing">Nanjing</option>
                        <option data-market-path="/l/shanghai--31">Shanghai
                                    </option>
                        <option data-market-path="/l/shenzhen">Shenzhen</option>
                        <option data-market-path="/l/suzhou">Suzhou</option>
                        <option data-market-path="/l/taipei--TPE">Taipei</option>
                        <option data-market-path="/l/wuhan">Wuhan</option>
                        <option data-market-path="/l/xi-an">Xi'An</option>
                      </optgroup>
                      <optgroup label="India">
                        <option data-market-path="/l/bengaluru--Karnataka">
                          Bengaluru</option>
                        <option data-market-path="/l/gurugram--HR">Gurugram
                                    </option>
                        <option data-market-path="/l/hyderabad">Hyderabad
                                    </option>
                        <option data-market-path="/l/mumbai">Mumbai</option>
                        <option data-market-path="/l/ncr-delhi">NCR Delhi
                                    </option>
                        <option data-market-path="/l/pune">Pune</option>
                      </optgroup>
                      <optgroup label="Indonesia">
                        <option data-market-path="/l/jakarta">Jakarta</option>
                      </optgroup>
                      <optgroup label="Ireland">
                        <option data-market-path="/l/dublin">Dublin</option>
                      </optgroup>
                      <optgroup label="Israel">
                        <option data-market-path="/l/be-er-sheva--israel">Be'er
                                        Sheva</option>
                        <option data-market-path="/l/haifa--israel">Haifa
                                    </option>
                        <option data-market-path="/l/herzliya--israel">Herzliya
                                    </option>
                        <option data-market-path="/l/jerusalem--israel">Jerusalem
                                    </option>
                        <option data-market-path="/l/petah-tikva--israel">Petah
                                        Tikva</option>
                        <option data-market-path="/l/tel-aviv--israel">Tel Aviv
                                    </option>
                      </optgroup>
                      <optgroup label="Italy">
                        <option data-market-path="/l/milan">Milan</option>
                      </optgroup>
                      <optgroup label="Japan">
                        <option data-market-path="/l/fukuoka">Fukuoka</option>
                        <option data-market-path="/l/kobe">Kobe</option>
                        <option data-market-path="/l/nagoya">Nagoya</option>
                        <option data-market-path="/l/osaka">Osaka</option>
                        <option data-market-path="/l/sendai-d440a588-7f29-494e-8bee-84ba5e85f95d">Sendai
                                    </option>
                        <option data-market-path="/l/tokyo">Tokyo</option>
                        <option data-market-path="/l/yokohama">Yokohama</option>
                      </optgroup>
                      <optgroup label="Malaysia">
                        <option data-market-path="/l/kuala-lumpur">Kuala Lumpur
                                    </option>
                      </optgroup>
                      <optgroup label="Mexico">
                        <option data-market-path="/l/guadalajara">Guadalajara
                                    </option>
                        <option data-market-path="/l/mexico-city--DIF">Mexico
                                        City</option>
                        <option data-market-path="/l/monterrey">Monterrey
                                    </option>
                      </optgroup>
                      <optgroup label="Netherlands">
                        <option data-market-path="/l/amsterdam">Amsterdam
                                    </option>
                      </optgroup>
                      <optgroup label="Norway">
                        <option data-market-path="/l/oslo">Oslo</option>
                      </optgroup>
                      <optgroup label="Peru">
                        <option data-market-path="/l/lima">Lima</option>
                      </optgroup>
                      <optgroup label="Philippines">
                        <option data-market-path="/l/manila">Manila</option>
                      </optgroup>
                      <optgroup label="Poland">
                        <option data-market-path="/l/warsaw">Warsaw</option>
                      </optgroup>
                      <optgroup label="Russia">
                        <option data-market-path="/l/moscow">Moscow</option>
                      </optgroup>
                      <optgroup label="Singapore">
                        <option data-market-path="/l/singapore">Singapore
                                    </option>
                      </optgroup>
                      <optgroup label="South Africa">
                        <option data-market-path="/l/cape-town">Cape Town
                                    </option>
                        <option data-market-path="/l/johannesburg--GP">
                          Johannesburg</option>
                      </optgroup>
                      <optgroup label="South Korea">
                        <option data-market-path="/l/busan">Busan</option>
                        <option data-market-path="/l/seoul">Seoul</option>
                      </optgroup>
                      <optgroup label="Spain">
                        <option data-market-path="/l/barcelona">Barcelona
                                    </option>
                        <option data-market-path="/l/madrid">Madrid</option>
                      </optgroup>
                      <optgroup label="Sweden">
                        <option data-market-path="/l/stockholm">Stockholm
                                    </option>
                      </optgroup>
                      <optgroup label="Thailand">
                        <option data-market-path="/l/bangkok">Bangkok</option>
                      </optgroup>
                      <optgroup label="United Arab Emirates">
                        <option data-market-path="/l/abu-dhabi">Abu Dhabi
                                    </option>
                        <option data-market-path="/l/dubai">Dubai</option>
                      </optgroup>
                      <optgroup label="United Kingdom">
                        <option data-market-path="/l/birmingham">Birmingham
                                    </option>
                        <option data-market-path="/l/cambridge">Cambridge
                                    </option>
                        <option data-market-path="/l/edinburgh">Edinburgh
                                    </option>
                        <option data-market-path="/l/london">London</option>
                        <option data-market-path="/l/manchester">Manchester
                                    </option>
                      </optgroup>
                      <optgroup label="Vietnam">
                        <option data-market-path="/l/ho-chi-minh-city">Ho Chi
                                        Minh City</option>
                      </optgroup>
                    </select>
                  </div>
                </div>
                <div className="home-hero__capacity-select ray-form-item">
                  <button type="button" id="open-wizard-btn"
                    className="home-hero__button home-hero__button--full-width ray-button ray-button--primary">
                    Start
                        </button>
                </div>
              </form>

            </div>

            <div
              className="home-hero__right-container ray-grid__cell--span-10-desktop ray-grid__cell--span-8-tablet ray-grid__cell--span-4-phone notranslate">
              <div id=""
                className="home-hero__glide glide glide--ltr glide--slider glide--swipeable we-glide-slider--active">
                <div className="we-glide-touch-event-interceptor">
                  <div data-glide-el="track" className="glide__track">
                    <ul className="glide__slides"
                      style={{ transition: "transform 0ms cubic-bezier(0.165, 0.84, 0.44, 1) 0s", width: "5576px", transform: "translate3d(0px, 0px, 0px)" }}>
                      <li className="glide__slide glide__slide--active"
                        style={{ width: "1096px", marginRight: "12px" }}>
                        <div className="ray-image ray-image--16by9">
                          <img sizes="(minWidth: 1195px) 1096px, (minWidth: 600px) 90vw, 90vw" src="https://tempwework.netlify.app/images/image-one.jpg" alt="homepage hero 1" />
                        </div>

                      </li>
                      <li className="glide__slide" style={{ width: "1096px", marginLeft: "12px", marginRight: "12px" }}>
                        <div className="ray-image ray-image--16by9">
                          <img sizes="(minWidth: 1195px) 1096px, (minWidth: 600px) 90vw, 90vw" src="https://tempwework.netlify.app/images/image-two.jpg" alt="homepage hero 2" />
                        </div>

                      </li>
                      <li className="glide__slide" style={{ width: "1096px", marginLeft: "12px", marginRight: "12px" }}>
                        <div className="ray-image ray-image--16by9">
                          <img sizes="(minWidth: 1195px) 1096px, (minWidth: 600px) 90vw, 90vw" alt="homepage hero 3" src="https://tempwework.netlify.app/images/image-three.jpg" />
                        </div>

                      </li>
                      <li className="glide__slide" style={{ width: "1096px", marginLeft: "12px", marginRight: "12px" }}>
                        <div className="ray-image ray-image--16by9">
                          <img sizes="(minWidth: 1195px) 1096px, (minWidth: 600px) 90vw, 90vw" alt="homepage hero 4" src="https://tempwework.netlify.app/images/image-four.jpg" className="loaded" />
                        </div>

                      </li>
                      <li className="glide__slide" style={{ width: "1096px", marginLeft: "12px" }}>
                        <div className="ray-image ray-image--16by9">
                          <img sizes="(minWidth: 1195px) 1096px, (minWidth: 600px) 90vw, 90vw" alt="homepage hero 5" src="https://tempwework.netlify.app/images/image-five.jpg" className="loaded" />
                        </div>

                      </li>
                    </ul>
                  </div>

                  <div data-glide-el="controls">
                    <button onMouseUp="this.blur();"
                      className="slider__arrow-btn slider__arrow-btn--left ray-button--secondary hidden"
                      data-glide-dir="&lt;" aria-label="left slider arrow">
                      <ArrowLeft /> </button>

                    <button onMouseUp="this.blur();"
                      className="slider__arrow-btn slider__arrow-btn--right ray-button--secondary"
                      data-glide-dir="&gt;" aria-label="right slider arrow">
                      <ArrowRight /> </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  )
}
