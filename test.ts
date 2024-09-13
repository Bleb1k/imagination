import unicode from "npm:unicode-properties"; // to be reimplemented manually in compiler 2.0

const file = Deno.openSync("test.txt", { read: true });

const fileInfo = await file.stat();
if (!fileInfo.isFile) throw new Error("Expected file");

console.log(fileInfo);

const fullBuf = new Uint8Array(fileInfo.size);
const buf = new Uint8Array(
    fileInfo.blksize !== null
        ? Math.min(fileInfo.size, fileInfo.blksize)
        : Math.min(fileInfo.size, 4096),
);

let totalLen = 0;
let len: number | null = 0;
while (null !== (len = await file.read(buf))) {
    fullBuf.set(buf, totalLen);
    totalLen += len;
}

const decoder = new TextDecoder("utf-8");
const text = decoder.decode(fullBuf);

const segmenter = new Intl.Segmenter("en-us", { granularity: "grapheme" });
for (const grapheme of segmenter.segment(text)) {
    // console.log(
    //     grapheme.segment,
    //     unicode.getCategory(grapheme.segment.charCodeAt(0)),
    // );
    if (grapheme.segment.length <= 1) {
        console.log(
            Array.from(grapheme.segment).map((
                point,
            ) => [point, unicode.getCategory(point.charCodeAt(0))].join(" "))
                .join(
                    "\n",
                ),
        );
    } else {
        console.log(
            [
                grapheme.segment,
                unicode.getCategory(grapheme.segment.charCodeAt(0)),
            ].join(" "),
        );
    }
}

// console.log(...segmenter.segment(text));
