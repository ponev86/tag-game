import typescript from '@rollup/plugin-typescript';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import html from '@rollup/plugin-html';
import serve from 'rollup-plugin-serve';
import replace from '@rollup/plugin-replace';
import livereload from 'rollup-plugin-livereload';
import terser from '@rollup/plugin-terser';
import postcss from 'rollup-plugin-postcss';

const isProd = process.env.NODE_ENV === 'production';
const outputFolder = isProd ? 'build' : 'public';
const extensions = ['.js', '.ts', '.tsx'];

const getTemplateHtml = ({ title }) => `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta content="width=device-width" name="viewport" id="viewport">
  <title>${title}</title>
</head>
<body>
  <div id="root"></div>
  <script src="index.js"></script>
</body>
</html>
`;

export default {
  input: 'src/index.tsx',
  output: {
    file: `${outputFolder}/index.js`,
    format: 'es',
  },
  plugins: [
    replace({
      'process.env.NODE_ENV': JSON.stringify(isProd ? 'production' : 'development'),
      preventAssignment: true,
    }),
    commonjs(),
    resolve({
      extensions,
    }),
    typescript(),
    html({
      title: 'Tag Game',
      fileName: 'index.html',
      template: getTemplateHtml,
    }),
    postcss({
      extract: false,
      modules: true,
      use: ['sass'],
    }),
    isProd && terser(),
    !isProd &&
      serve({
        host: 'localhost',
        port: 3000,
        open: true,
        contentBase: ['public'],
      }),
    !isProd &&
      livereload({
        watch: 'public',
      }),
  ],
};
