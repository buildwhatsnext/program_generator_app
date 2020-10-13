import { Page } from '../../components/page';
import { ProjectOpenPanel } from '../../components/panels/panel.projects';
import { ProjectSelection } from '../../features/project/project.recents';

export default function ProjectSelectionPage() {
  return (
    <Page panel={<ProjectOpenPanel/>}>
      <ProjectSelection />
    </Page>
  )
}