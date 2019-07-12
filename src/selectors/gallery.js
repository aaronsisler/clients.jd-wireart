// Get filtered gallery pieces by category and name
export default (gallery, { category = "ALL", text = "" }) =>
  gallery.filter(galleryPiece => {
    const matchesCategory =
      category === "ALL" || galleryPiece.category === category;
    const includesText = galleryPiece.name
      .toLowerCase()
      .includes(text.toLowerCase());

    return matchesCategory && includesText;
  });
