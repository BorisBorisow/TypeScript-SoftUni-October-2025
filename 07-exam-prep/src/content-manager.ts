import { DetailedContent, findItemById } from "./content-types";
import { Viewer } from "./models";
import { NotifyOnSuccess } from "./decorators";
export class ContentManager {
  private contentItems: DetailedContent[] = [];
  private watchedContent: Map<number, Viewer[]> = new Map();

  addContent(item: DetailedContent) {
    this.contentItems.push(item);
    this.watchedContent.set(item.id, []);

    return `Content ${item.title} (ID: ${item.id}) has been added.`;
  }

  // @NotifyOnSuccess("Email")
  markAsWatched(contentId: number, viewer: Viewer) {
    const viewerList = this.watchedContent.get(contentId);

    if (viewerList) {
      viewerList.push(viewer);
      return `Viewer ${viewer.name} marked content ID ${contentId} as watched.`;
    } else {
      return `ERROR: Content with ID ${contentId} not found.`;
    }
  }
  listAllContent() {
    return this.contentItems.map((item) => item.getDetails());
  }

  findContent(contentId: number) {
    return findItemById(this.contentItems, contentId);
  }
}
