import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import jsPDF from 'jspdf';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Try jsPDF';

  onPrint(): void {
    let objdiv = document.createElement('div');

    // let objdiv = document.createElement('div');
    // objdiv.classList.add('w-full');
    // objdiv.style.fontSize = '24px';
    // objdiv.style.margin = '20px';

    // // Selected the document
    // let titlep = document.createElement('p');
    // titlep.innerText = this.selectedFile?.name!;
    // objdiv.appendChild(titlep);
    // // Count of items
    // let countp = document.createElement('p');
    // countp.innerText = `Count of items: ${printqueues.length}`;
    // objdiv.appendChild(countp);
    // // Date
    // let datep = document.createElement('p');
    // datep.innerText = new Date().toLocaleString();
    // datep.style.paddingBottom = '20px';
    // objdiv.appendChild(datep);

    // let containdiv = document.createElement('div');
    // containdiv.classList.add('grid'); 
    // containdiv.classList.add('grid-cols-4');
    // containdiv.classList.add('gap-4');
    // objdiv.appendChild(containdiv);

    // for (let qidx = 0; qidx < printqueues.length; qidx++) {
    //   let qdiv = document.createElement('div');
    //   qdiv.classList.add('w-full');
    //   qdiv.innerText = printqueues[qidx].cnword.slice(0, 30);
    //   containdiv.appendChild(qdiv);
      
    //   qdiv = document.createElement('div');
    //   qdiv.classList.add('w-full');
    //   qdiv.innerText = '________________________';
    //   containdiv.appendChild(qdiv);
    // }

    // // Splitter
    // let splitp = document.createElement('p');
    // splitp.classList.add('w-full');
    // splitp.style.paddingTop = '40px';
    // splitp.style.paddingBottom = '40px';
    // splitp.innerText = '__________________________ANSWER BELOW______________________';
    // objdiv.appendChild(splitp);

    // // Answer
    // let awrdiv = document.createElement('div');
    // awrdiv.classList.add('w-full');
    // awrdiv.classList.add('grid'); 
    // awrdiv.classList.add('grid-cols-6');
    // awrdiv.classList.add('gap-2');
    // objdiv.appendChild(awrdiv);

    // for (let qidx = 0; qidx < printqueues.length; qidx++) {
    //   let qdiv = document.createElement('div');
    //   qdiv.classList.add('w-full');
    //   qdiv.innerText = printqueues[qidx].enword;
    //   awrdiv.appendChild(qdiv);
    // }

    // // Finally one.
    // let finalp = document.createElement('p');
    // finalp.innerText = 'The End';
    // finalp.style.paddingBottom = '20px';
    // objdiv.appendChild(finalp);

    // document.body.appendChild(objdiv);

	// for (let qidx = 0; qidx < 100; qidx++) {
	// 	let qdiv = document.createElement('div');
	// 	qdiv.innerText = `测试 ${qidx}`;
	// 	objdiv.appendChild(qdiv);
		
	// 	qdiv = document.createElement('div');
	// 	qdiv.innerText = '________________________';
	// 	objdiv.appendChild(qdiv);
    // }

	let pdf = new jsPDF('p', 'pt', 'letter');
	// pdf.addFileToVFS('SIMKAI.ttf', 'SIMKAI.ttf');
	pdf.addFont('SIMKAI.ttf', 'smikai', 'normal');
	pdf.setFont('smikai', 'normal');
	pdf.setFontSize(24);
	pdf.setLanguage("zh-CN");
	let linehgt = pdf.getLineHeight();
	console.log(linehgt);
	for (let qidx = 0; qidx < 100; qidx++) {
		pdf.text(`测试 ${qidx}`, 20, 20 + qidx * 20);
	}
	pdf.save('test.pdf');
    //document.body.removeChild(element);
  }
}

