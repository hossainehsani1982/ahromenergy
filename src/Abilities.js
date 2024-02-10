import './Abilities.css';


const data = [
  {ulTile : `طراحی و مهندسی`, items : [`مطالعات اولیه`, `طراحی مقدماتی`, `طراحی تفضیلی`, `نظارت کارگاهی`, `آموزش`]},
  {ulTile : `تامین تجهیزات`, items : [`ارزیابی تامین کنندگان`, `گشایش اعتبارات`, `نظارت بر ساخت`, `بیمه`, `بازرسی`]},
  {ulTile : `نصب و راه اندازی`, items : [`عملیات ساختمانی`, `نصب تجهیزات`, `برق`, `لوله‌کشی`, `راه‌اندازی`,`بهره‌برداری`]},
  {ulTile : `سرمایه گذاری`, items : [`مطالهه بازار`, `تامین مالی پروژه‌ها`]},

];

function Abilities() {
  return (
    <div>
      {data.map((item, index) => (
        <ul key={index}>
          <h2>{item.ulTile}</h2>
          {item.items.map((subItem, index) => (
            <li key={index}>{subItem}</li>
          ))}
        </ul>
      ))}
    </div>
  );
}

export default Abilities;