import React from "react";
import NavContainer from './components/Nav/NavContainer';
import Scheduler from './components/Scheduler';

export default function App() {
  return (
    <div className="App">
      <NavContainer>
        <Scheduler />
      </NavContainer>
    </div>
  );
}
