import React from 'react'
import "./Home.css";
import Product from './Product';

function Home() {
    return (
        <div className="home">
        <div className="home__container">
            <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="" />
        
        <div className="home__row">
            <Product
                 id="12321341"
                 title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback" 
                 price={11.96} 
                 image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
                 rating={5}/>

            <Product 
                id="49538094"
                title="Kenwood KMix Stand Mixer For Baking, Stylish kitchen mixer with K-beater, Dough HOOK And Whisk, 5 litre Glass Bowl"
                price={239.0}
                image="https://images-na.ssl-images-amazon.com/images/I/61ykwnYkbdL._AC_SL1000_.jpg"
                rating={4}
            />
        </div>

        <div className="home__row">
            <Product 
                id="4903850"
                title="LG 108 cm (43 inches) Full HD LED Smart TV 43LM5650PTA (Ceramic Black) (2020 Model)"
                price={199.99}
                image="https://images-na.ssl-images-amazon.com/images/I/7173oa2fxXL._SL1500_.jpg"
                rating={5}
            />
        <Product
                id="23445930"
                title="Echo Dot (3rd Gen) – Smart speaker with Alexa (Black)"
                price={89.99}
                image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
                rating={3}
                
        />
        <Product
                id="3254354345"
                title="Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Space Grey (4th Generation)"
                price={598.99}
                image="https://images-na.ssl-images-amazon.com/images/I/811aBwuSuIL._SL1500_.jpg"
                rating={4}
        />

        </div>

        <div className="home__row">
        <Product
                id="3254324365"
                title="AOPEN Acer 32-inch Full HD Curve VA Panel Gaming Monitor with DisplayPort, HDMI, DVI, 4ms Response time, 144Hz Refresh Rate - 32HC1Q (Black)"
                price={80}
                image="https://images-na.ssl-images-amazon.com/images/I/812WXALePlL._SL1500_.jpg"
                rating={4}
        />

        </div>
        </div>
        </div>
    )
}

export default Home;
