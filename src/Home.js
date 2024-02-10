import './Home.css';
import './Body.css';


function Cards() {
  return (
    <div className='cardContainer'>
      <div className="cardContainer-card">
        <div className='cHeader'>
          <h3>درباره اهرم انرژی</h3>
        </div>
        <p>شرکت اهرم انرژی در سال ۹۰ تاسیس گردید و از بدو تاسیس، فعالیت خود را به عنوان پیمانکار در بخش های مختلف مهندسی، تامین تجهیزات و اجرا آغاز نمود. کسب تجارب مختلف در اجرای پروژه های ملی در حوزه های نفت  گاز، پتروشیمی و صنایع درمدت فعالیت، این شرکت رابه عنوان یکی از شرکتهای پیمانکار EPC فعال مطرح نموده است که توانایی اجرای پروژه های بزرگ از مرحله مهندسی تا مرحله راه اندازی و تحویل به کارفرماو ارائه خدمات پس از فروش را دارد.

          بهره گیری از دانش متخصصان کارآزموده و جوان و اصرار بر رعایت اصل تعهد و مسئولیت پذیری ضامن پویایی و موفقیت این شرکت در اجرای پروژه های صنعتی بوده است. بر همین اساس همکاری موثر با کارفرمایان و جلب رضایت ایشان در زمان اجرای پروژه ها و پس ازآن از نقاط قوت این شرکت محسوب گردیده که همراهی مشتریان و کارفرمایان در مراحل مختلف اجرای پروژه ها تا تحقق کامل تمامی اهداف پیش بینی شده در آنها را به دنبال داشته است.</p>
      </div>
      <div className="cardContainer-card">
        <div className='cHeader'>
          <h3>توانایی و خدمات</h3>
        </div>
        <p>ایجاد تشکیلات منسجم مبتنی بر دانش که پتانسیل لازم برای اجرای پروژه های کلان و استراتژیک را داشته و بتواند بر ثروت ملی کشور تاثیر گذار بوده وآنرا بطور محسوسی افزایش دهد .
          <ul>
            <li>شناخت و پیش بینی نیازهای بازار</li>
            <li>بسط حوزه فعالیت از ایران به کشورهای هم جوار</li>
            <li>تلاش برای عملکرد بهتر از طریق مدیریت و اجرای پروژه های بهبود</li>
            <li>ورود به بازارهای جدید</li>
            <li>به کارگیری تکنولوژی های نوین با روش های تحقیق و توسعه و با انتقال تکنولوژی</li>
            <li>جذب نیرو های متخصص، متعهد و نخبه و الویت دادن به کار مبتنی بر دانش</li>
            <li>و...</li>
          </ul>
        </p>
      </div>
      <div className="cardContainer-card">
        <div className='cHeader'>
          <h3>ارزش‌ها </h3>
        </div>
        <ul>
          <li style={{ textAlign: 'right' }}>یکپارچگی و هماهنگی</li>
          <li style={{ textAlign: 'right' }}>نتیجه گرایی</li>
          <li style={{ textAlign: 'right' }}>تعهد سازمانی</li>
          <li style={{ textAlign: 'right' }}>اعتبار و قابلیت پذیرش</li>
          <li style={{ textAlign: 'right' }}>مسئولیت پذیری</li>
          <li style={{ textAlign: 'right' }}>نوآوری</li>
        </ul>
      </div>

    </div>
  );

}

function HomeProjects({ images }) {
  return (
    <div className="projectsContainer">
      <h2>پروژه‌های شرکت</h2>
      <div className="image-row">
        {images.map((imageUrl, index) => (
          <img key={index} src={require(`${imageUrl}`)} alt={`Image ${index + 1}`} />
        ))}
      </div>
    </div>
  );
}

function Home() {
  const images = [
    "./projects_photos/makhzan6000.png",
    "./projects_photos/makhzan10000.png",
    "./projects_photos/pump_bandarA.png",
    "./projects_photos/pump.png",
    "./projects_photos/tasfieKha_Ahvaz.png",
    "./projects_photos/tasfieKha.png",
  ]
  return (
    <div className="homeContainer">
      <div className="imageSlider"></div>
      <div className="textContent">
        <Cards />
        <HomeProjects images={images} />
      </div>
    </div>
  );
}


export default Home;