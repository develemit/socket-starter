const safetyNet = (func, label) => {
  try {
    func();
  } catch (error) {
    console.error(`Error with ${label}`, error);
  }
};

module.exports = safetyNet;
