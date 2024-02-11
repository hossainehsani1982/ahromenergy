import './Products.css';
import React from 'react';
import Helmet from 'react-helmet';

const products = [
  {
    mainCatId: 0,
    productName: `پلی آلومینیوم کلراید | PAC`,
    industrialName: `پلی آلومینیوم کلراید | (PAC (Poly Aluminium Chloride`,
    form: ` پودر زرد و سفید رنگ`,
    usage: [`تصفیه فاضلاب`, `تصفیه آب آشامیدنی و صنعتی`, `صنعت کاغذسازی`, `محصولات آرایشی`],
    advantages: `قابلیت استفاده در دامنه-های بسیار وسیعتری از کدورت و دمای آب، تولید کمتر لجن، بالاتر بودن تراکم و چگالی لجن تولیدی، پایین¬تر بودن میزان باقیمانده آلومینیوم در آب شرب و کمتر بودن میزان مصرف بازای هر لیتر آب.`,
    cautions: [`از تماس با چشم، پوست، لباس خودداری شود`, `از تنفس گرد و غبار خودداری کنید.`, `در هوای خنک (20 درجه سانتیگراد)، خشک و تهویه مطبوع نگهداری کنید.  `],
    pImg: "./projects_photos/products/1.png"
  },
  {
    mainCatId: 1,
    productName: ` مخازن تحت فشار | Pressure Vessels`,
    industrialName: ``,
    form: `مخازنی معمولاً استوانه‌ای یا کروی هستند که معمولاً برای نگهداری مایعات یا گازها در فشاری غیر از فشار اتمسفر استفاده می‌شوند. `,
    usage: [`مخازنی معمولاً استوانه‌ای یا کروی هستند که معمولاً برای نگهداری مایعات یا گازها در فشاری غیر از فشار اتمسفر استفاده می‌شوند.    `],
    advantages: ``,
    cautions: [],
    pImg: "./projects_photos/products/3.png"
  },
  {
    mainCatId: 2,
    productName: ` هیدروسولفیت سدیم | Sodium Hydrosulfite`,
    industrialName: ` هیدروسولفیت سدیم | Sodium Hydrosulfite`,
    form: `پودر کریستالی سفید رنگ`,
    usage: [`از هیدروسولفیت سدیم برای بی رنگ سازی آب در تصفیه خانه‌ها نیز استفاده میشود.`,
      `به عنوان یک افزودنی غذایی، محصول هیدروسولفیت سدیم مورد توجه مشتریان قرار می گیرد`,
      `سدیم هیدروسولفیت (سدیم دی تیونیت) به طور گسترده ای به عنوان یک عامل سفید کننده بهتر از بی سولفیت سدیم از نظر بهبود سفیدی کاغذ شناخته می شود`,
      `یک پارچه کاملاً بی رنگ اساس فرآیند رنگرزی است. عامل سفید کننده بسیار موثر کیفیت رنگ زدایی را بهبود می بخشد. به همین دلیل است که ما سال ها به هیدروسولفیت سدیم با کیفیت بالاتر و بالاتر (سدیم دی تیونیت) اختصاص داده ایم. از این رو، پایداری و خلوص بالا به کاربران ما اجازه می دهد تا با صرفه جویی در حجم استفاده، سود خود را افزایش دهید`],
    advantages: ``,
    cautions: [],
    pImg: "./projects_photos/products/5.png"
  }
]

const productList = [`محصولات پلیمری`, `مخازن تحت فشار`, `هیدروسولفیت سدیم`]

function Products() {
  return (
    <div className='main-container'>
       <Helmet>
        <title>اهرم انرژی | محصولات</title>
      </Helmet>
      {products.map((product, index) => (
        <div key={index} className='product-container'>
          <div className='product-container-header'>
            <h3 style={{color:'white'}}>{productList[index]}</h3>
          </div>
          <img key={index} src={require(`${product.pImg}`)} alt={`cmpImage ${index + 1}`}/>
            <h3>{product.productName}</h3>
        </div>
      ))}


    </div>
  );
}

export default Products;