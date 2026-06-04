import Logo3D from '../Logo3D';

export default function Logo3DExample() {
  return (
    <div className="flex items-center gap-8 p-8 bg-background">
      <Logo3D size="sm" />
      <Logo3D size="md" />
      <Logo3D size="lg" />
    </div>
  );
}