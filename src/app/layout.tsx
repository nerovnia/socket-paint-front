import SettingBar from "@/components/SettingBar";
import Toolbar from "@/components/Toolbar";
import Canvas from "@/components/Canvas";

export const metadata = {
  title: "Socket Paint",
  description: "Socket Paint Application",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Toolbar />
        <SettingBar></SettingBar>
        <Canvas />
      </body>
    </html>
  );
}
