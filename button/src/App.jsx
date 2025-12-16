// import ChromeButton from "./components/ChromeButton/ChromeButton";
import ReflectiveButton from "./components/ReflectiveButton/ReflectiveButton";

export default function App() {
 return (
<div
     style={{
       height: "100vh",
       display: "flex",
       justifyContent: "center",
       alignItems: "center",
       background: "#0b0b0b",
     }}
>
<ReflectiveButton
       label="BUTTON"
       onClick={() => alert("Clicked")}
     />
     {/* <ChromeButton
     label="Button"
       onClick={() => alert("Clicked")}
     /> */}
</div>
 );
}
// export default function App() {
//  return (
// <div style={{
//      minHeight: "100vh",
//      display: "grid",
//      placeItems: "center",
//      background: "#0e0e0e"
//    }}>
// <ChromeButton label="Continue as Guest" />
// </div>
//  );
// }