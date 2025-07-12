const SectionHeader = ({ icon: Icon, title, subtitle = null }) => (
  <div className="flex items-center gap-4">
    <Icon />
    <strong className="flex flex-col">
      {title}
      {subtitle && <span className="text-sm font-normal text-muted-foreground">{subtitle}</span>}
    </strong>
  </div>
);

export default SectionHeader;