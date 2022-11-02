let videos = [
  { title: "First", rating: 5, comments: 2, createdAt: "", views: 59, id: 1 },
  { title: "Second", rating: 5, comments: 2, createdAt: "", views: 1, id: 2 },
  { title: "Third", rating: 5, comments: 2, createdAt: "", views: 57, id: 3 },
];

export const trending = (req, res) =>
  res.render("home", { pageTitle: "Home", videos });
export const watch = (req, res) => {
  const { id } = req.params;
  const video = videos[id - 1];
  res.render("watch", { pageTitle: `Watching ${video.title}`, video });
};
export const edit = (req, res) => res.render("edit", { pageTitle: "Edit" });
export const search = (req, res) => res.send("Search");
export const upload = (req, res) => res.send("Upload");
export const deleteVideo = (req, res) => res.send("Delete Video");