import { useHistory } from "react-router-dom";

function useDelayLink() {
  let test = 4;
  const history = useHistory();
  function delayLink(e) {
    e.preventDefault();
    let href = e.currentTarget.getAttribute("href");
    setTimeout(() => {
      history.push(href);
      document.querySelector(".loading-page").style.transform = "scale(0)";
    }, 700);
  }
  return {
    delayLink,
    test,
  };
}

export default useDelayLink;
