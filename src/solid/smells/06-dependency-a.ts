import { PostService } from "./06-dependency-b";
import { JsonDataBaseService } from "./06-dependency-c";

// Main
(async () => {
  const provider = new JsonDataBaseService();
  const postService = new PostService();

  const posts = await postService.getPosts();

  console.log({ posts });
})();
