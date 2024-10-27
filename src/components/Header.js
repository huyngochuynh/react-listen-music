import useMusicPlayer from "../hooks/usePlayerProvider";

function Header() {
  const { currentTrackName } = useMusicPlayer();
  return (
    <div className="header">
        <marquee behavior="scroll" direction="right">
            {currentTrackName}
        </marquee>
    </div>
  );
}

export default Header;