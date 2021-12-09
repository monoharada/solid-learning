module.exports = (api) => ({
    plugins: api.env("production")
      ? [
          [
            "lightwindcss/babel",
            {
              analysisFile: "./lightwindcss.json",
            },
          ],
        ]
      : [],
  });