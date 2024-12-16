export const getLessonLength = (sections: any) => {
  const totalLessons = Object.values(sections).reduce(
    (total, section: any) => total + section.length,
    0
  );
  return {
    totalLessons,
  };
};
