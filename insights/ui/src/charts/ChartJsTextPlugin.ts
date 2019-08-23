import { PluginServiceRegistrationOptions } from 'chart.js';

const ChartJsTextPlugin: PluginServiceRegistrationOptions = {
    beforeDraw(chart) {
        const width = chart.width;
        const height = chart.height;
        const ctx = chart.ctx;
        /// @ts-ignore
        const description = chart.description;

        if (!ctx || !width || !height) {
            return;
        }
        ctx.restore();
        // var fontSize = (height / 400).toFixed(2);
        // ctx.font = fontSize + "em sans-serif";
        // ctx.textBaseline = "middle";
        ctx.font = '1.1rem sans-serif';
        // ctx.textAlign = "center";
        ctx.textBaseline = 'middle';

        if (description) {
            const text = description.text;
            const containerWidth = description.width;
            const words = text.split(' ');
            const lines = [];
            let textX = width;

            let line = '';
            for (const w of words) {
                line = `${line}${w} `;
                const lineWidth = ctx.measureText(line).width;
                if (lineWidth > containerWidth) {
                    lines.push(line);

                    if (Math.round(width - lineWidth) < textX) {
                        textX = Math.round(width - lineWidth);
                    }
                    line = '';
                }
            }
            if (line) {
                lines.push(line);
            }
            const textY = (height / 2);

            for (let i = 0; i < lines.length; i++) {
                const t = lines[i];
                ctx.fillText(t, textX, textY + (i * 20));
            }
            ctx.save();
        }
    },
};

export default ChartJsTextPlugin;
