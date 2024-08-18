import ytstream from "yt-stream";
import ytdown from "ytapi-roffineru4k";

export default async function streamAudio(req, res) {
  const { id } = req.query;

  if (!id)
    return res.json({
      success: false,
      result: "voçe precisa passar o id da musica !",
    });

  console.log(
    "new music requested !",
    new Date().getMinutes() + ":" + new Date().getSeconds()
  );

  try {
    const { data } = await ytdown.ytdown(
      `https://www.youtube.com/watch?v=${id}`
    );
    console.log(data?.audio);
    if (!data?.audio) throw new Error();
    res.json({
      success: true,
      result: data.audio,
    });
  } catch (err) {
    console.log("primary alternative falied", err);

    try {
      const stream = await ytstream.stream(
        `https://www.youtube.com/watch?v=${id}`,
        {
          quality: "high",
          type: "audio",
          highWaterMark: 1048576 * 32,
          // download: true
        }
      );
      res.json({
        success: true,
        result: stream?.url,
      });
    } catch (e) {
      res.json({
        success: false,
        result: "Error interno ao reproduzir a sua musica.",
      });
      console.error("second alternative falied ", e);
    }
  }
}
