function BackgroundTheme() {
  return (
    <div>
      <div className="fixed left-0 top-0 -z-10 h-full w-full">
        <div className="absolute inset-0 -z-10  w-full bg-background bg-[linear-gradient(to_left,#fbf818_0.2px,transparent_0.55px),linear-gradient(to_top,#fbf818_0.2px,transparent_0.55px)] bg-[size:80px_80px] "></div>
      </div>
    </div>
  );
}

export default BackgroundTheme;
