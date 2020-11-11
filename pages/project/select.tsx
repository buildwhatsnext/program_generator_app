import { Page } from '../../client/components/pages/page';
import { ProjectOpenPanel } from '../../client/components/panels/panel.projects';
import { ProjectSelection } from '../../client/components/display/display.recents';

export default function ProjectSelectionPage() {
  return (
    <Page panel={<ProjectOpenPanel/>}>
      <ProjectSelection />
    </Page>
  )
}