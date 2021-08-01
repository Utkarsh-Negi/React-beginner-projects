const Template = ({ templates, setMeme }) => {
  return (
    <div className="templates">
      {templates.map((template) => (
        <div
          className="template"
          key={template.id}
          onClick={() => {
            setMeme(template);
          }}
        >
          <div
            className="image"
            style={{ backgroundImage: `url(${template.url})` }}
          ></div>
        </div>
      ))}
    </div>
  );
};
export default Template;
