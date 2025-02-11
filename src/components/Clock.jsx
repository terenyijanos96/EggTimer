import n0 from "../assets/img/n0.png";
import n1 from "../assets/img/n1.png";
import n2 from "../assets/img/n2.png";
import n3 from "../assets/img/n3.png";
import n4 from "../assets/img/n4.png";
import n5 from "../assets/img/n5.png";
import n6 from "../assets/img/n6.png";
import n7 from "../assets/img/n7.png";
import n8 from "../assets/img/n8.png";
import n9 from "../assets/img/n9.png";
import colon from "../assets/img/colon.png";
import done from "../assets/img/done.png"

const numbers = [n0, n1, n2, n3, n4, n5, n6, n7, n8, n9];

export default function Clock({ remainingTime }) {
  console.log(remainingTime);

  const formatTime = () => {
    let min = Math.floor(remainingTime / 60);
    let sec = remainingTime % 60;

    let minF = Math.floor(min / 10);
    let minS = min % 10;
    console.log(minF);

    let secF = Math.floor(sec / 10);
    let secS = sec % 10;

    let ret = [];

    if (minF > 0) {
      ret.push(numbers[minF]);
      ret.push(numbers[minS]);
    } else {
      ret.push(numbers[0]);
      ret.push(numbers[minS]);
    }

    ret.push(colon);

    if (secF > 0) {
      ret.push(numbers[secF]);
      ret.push(numbers[secS]);
    } else {
      ret.push(numbers[0]);
      ret.push(numbers[secS]);
    }
    return ret;
  };

  return remainingTime > 0 ? (
    formatTime().map((num, index) => {
      return <img src={num} key={index} alt="" />;
    })
  ) : (
    <img src={done} alt="KÉÉÉÉSZ!!!" />
  );
}
