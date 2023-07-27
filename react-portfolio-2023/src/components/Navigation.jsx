export default function Nav() {
    const linkStyle = { border: '1px black', padding: '5px' };
  
    return (
      <Tabs
      value={value}
      onChange={handleChange}
      textColor="secondary"
      indicatorColor="secondary"
      aria-label="secondary tabs example"
    >
      <Tab value="about" label="About Me" />
      <Tab value="projects" label="My Projects" />
      <Tab value="resume" label="My Resume" />
      <Tab value="contact" label="Get in Touch" />
    </Tabs>
    );
  }
  