import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
declare const html2pdf: any;

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Try html2pdf';

  onPrint(): void {
    let element = document.createElement('div');
    element.innerHTML = `
<div id="html" style='position: absolute; left: 0; top: 0; bottom: 0; overflow: auto; width: 400px'>

		<h1>Html2Pdf</h1>
		<p>
			This demo uses Html2Canvas.js to render HTML. <br />Instead of using an HTML canvas however, a canvas
			wrapper using jsPDF is substituted. The <em>context2d</em> provided by the wrapper calls native PDF
			rendering methods.
		</p>
		<p>A PDF of this page will be inserted into the right margin.</p>

		<h2>Colors</h2>
		<p>
			<span style='color: red'>red</span> <span style='color: rgb(0, 255, 0)'>rgb(0,255,0)</span> <span
				style='color: rgba(0, 0, 0, .5)'>rgba(0,0,0,.5)</span> <span style='color: #0000FF'>#0000FF</span> <span
				style='color: #0FF'>#0FF</span>
		</p>

		<h2>Text Alignment</h2>
		<div style='text-align: left'>left</div>
		<div style='text-align: center'>center</div>
		<div style='text-align: right'>right</div>

		<h2>Margins and Padding</h2>
		<div style='background-color: red'>
			Red
			<div style='background-color: green; margin: 1em; padding: 1em;'>
				Green
				<div style='background-color: blue; margin: 1em'>Blue</div>
			</div>
		</div>

		<h2>Borders</h2>
		<div style='border: 1px solid black'>Single</div>
		<hr />
		<div style='border: 4px double black'>Double</div>

		<h2>Font Style</h2>
		<div style='font-style: normal'>Normal</div>
		<div style='font-style: italic'>Italic</div>
		<div style='font-style: oblique'>Oblique</div>
		<h2>Lists</h2>
		<ul>
			<li>apples</li>
			<li>oranges</li>
			<li>pears</li>
			<li>peaches</li>
			<li>lemons</li>
			<li>limes</li>
		</ul>

		<h2>Font Size</h2>
		<div style='font-size: 10px'>10px</div>
		<div style='font-size: 20px'>20px</div>
		<div style='font-size: 30px'>30px</div>

		<div style='font-size: 20pt'>20pt</div>
		<div style='font-size: 1em'>1em</div>
		<div style='font-size: 2em'>2em</div>

	</div>
      `;

    document.body.appendChild(element);

    var opt = {
      margin:       1,
      filename:     'myfile.pdf',
      image:        { type: 'jpeg', quality: 0.98 },
      html2canvas:  { scale: 2 },
      jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
    };

    // New Promise-based usage:
    // html2pdf().set(opt).from(element).save();
    html2pdf(element, opt).run(() => {
      document.body.removeChild(element);
    });
  }
}

