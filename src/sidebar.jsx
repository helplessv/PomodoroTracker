import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate, useLocation } from 'react-router-dom';

import TimezonesIcon from './assets/timezones.svg?react';
import PomodoroIcon from './assets/pomodoro.svg?react';
import DailyPlannerIcon from './assets/dailyplanner.svg?react';
import StopwatchIcon from './assets/stopwatch.svg?react';
import TimerIcon from './assets/timer.svg?react';
import WorldtimeIcon from './assets/worldtime.svg?react';
import AvatarIcon from './assets/avatar.svg?react';
import ToggleIcon from './assets/togglebutton.svg?react';

const SidebarContainer = styled.div`
  background-color: #1A1A1A;
  height: 100vh;
  width: ${props => props.width};
  padding: clamp(0.2rem, 0.5vw, 1rem);
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: width 0.3s ease;
  overflow: hidden;
`;

const ToggleButton = styled.button`
  flex: 1;
  width: auto;
  height: 2rem;
  display:flex;
  justify-content: center;
  color: #AAA;
  cursor: pointer;
  background: #242424;
  border-radius: 10px;
  svg {
    transition: transform 0.3s ease;
    transform: ${({ $isOpen }) => ($isOpen ? 'rotate(0deg)' : 'rotate(180deg)')};
    height: 1.6rem;
    width: 1.6rem;
  }
`;

const StyledButton = styled.button`
  height: 2rem;
  width: auto;
  background: transparent;
  display: flex;
  align-items: center;
  color: ${props => (props.$isActive ? '#FFD600' : '#363636')};
  justify-content: ${props => (props.$isOpen ? 'flex-start' : 'center')};
  gap: 0.6rem;
  padding: 0.3rem 0.5rem;
  border: none;
  cursor: pointer;

  svg {
    height: 1.6rem;
    width: 1.6rem;
    flex-shrink: 0;
  }
`;

const Name = styled.div`
  color: ${props => (props.$isActive ? '#FFD600' : '#363636')};
  display: ${props => (props.$isOpen ? 'block' : 'none')};
  font-size: clamp(0.65rem, 0.9vw, 0.9rem);
  font-weight: 600;
  transition: opacity 0.3s ease, max-width 0.3s ease;
  opacity: ${props => (props.$isOpen ? 1 : 0)};
  max-width: ${props => (props.$isOpen ? '200px' : '0')};
  white-space: nowrap;
`;

export default function Sidebar({currentName, setCurrentName}) {
  const [SidebarWidth, setSidebarWidth] = useState('3vw');
  const navigate = useNavigate();
  const location = useLocation();
  const isOpen = SidebarWidth !== '3vw';

  const buttons = [
    { path: '/Content1', Icon: TimezonesIcon, value: 'Timezones' },
    { path: '/Content2', Icon: PomodoroIcon, value: 'Pomodoro' },
    { path: '/Content3', Icon: DailyPlannerIcon, value: 'Daily Planner' },
    { path: '/Content4', Icon: WorldtimeIcon, value: 'Worldtime' },
    { path: '/Content5', Icon: TimerIcon, value: 'Timer' },
    { path: '/Content6', Icon: StopwatchIcon, value: 'Stopwatch' },
  ];

  function toggleSidebar() {
    setSidebarWidth(SidebarWidth === '3vw' ? '10vw' : '3vw');
  }
  function handleChoose(path, value){
    navigate(path);
    setCurrentName(value);
  }

  return (
    <SidebarContainer width={SidebarWidth}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5vh' }}>
        <ToggleButton onClick={toggleSidebar} $isOpen={isOpen}>
          <ToggleIcon />
        </ToggleButton>
        {buttons.map(({ path, Icon, value }) => {
          const isActive = location.pathname === path;
          return (
            <StyledButton
              key={path}
              $isActive={isActive}
              $isOpen={isOpen}
              onClick={() => handleChoose(path, value)}
            >
              <Icon />
              <Name $isActive={isActive} $isOpen={isOpen}>{value}</Name>
            </StyledButton>
          );
        })}
      </div>
      <StyledButton $isOpen={isOpen}>
        <AvatarIcon />
        <Name $isOpen={isOpen}>Account</Name>
      </StyledButton>
    </SidebarContainer>
  );
}
