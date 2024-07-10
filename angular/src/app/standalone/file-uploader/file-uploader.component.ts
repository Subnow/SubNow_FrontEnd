import { Component, EventEmitter, forwardRef, Input, OnInit, Output } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';

@Component({
  selector: 'app-file-uploader',
  standalone: true,
  templateUrl: './file-uploader.component.html',
  styleUrls: ['./file-uploader.component.scss'],
  imports:[CommonModule,SharedModule],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FileUploaderComponent),
      multi: true
    }
  ]
})
export class FileUploaderComponent implements ControlValueAccessor,OnInit {
  @Input() fileUrl: string | ArrayBuffer | null = null;
  @Output() fileUrlChange = new EventEmitter<string | ArrayBuffer | null>();
  @Output() fileChange = new EventEmitter<File | null>();
  errorMessage: string | null = null;

  private onChange: (file: string | null) => void = () => {};
  private onTouched: () => void = () => {};
  onFileSelected(event: any): void {
    const file = event.target.files[0];
    if (file) {
      const validTypes = ['image/png', 'image/jpeg', 'image/gif', 'image/svg+xml'];
      const maxSize = 512;

      if (!validTypes.includes(file.type)) {
        this.errorMessage = 'Invalid file type. Only SVG, PNG, JPG, and GIF are allowed.';
        this.clearFile();
        return;
      }

      const img = new Image();
      img.onload = () => {
        if (img.width > maxSize || img.height > maxSize) {
          this.errorMessage = 'Image dimensions should not exceed 512x512 pixels.';
          this.clearFile();
        } else {
          this.errorMessage = null;
          const reader = new FileReader();
          reader.onload = () => {
            this.fileUrl = reader.result;
            this.fileUrlChange.emit(this.fileUrl);
            this.fileChange.emit(file);
            this.onChange(this.fileUrl as string); // Call onChange with the base64 string
          };
          reader.readAsDataURL(file);
        }
      };
      img.src = URL.createObjectURL(file);
    }
  }

  clearFile(): void {
    this.fileUrl = null;
    this.fileUrlChange.emit(this.fileUrl);
    this.fileChange.emit(null);
    this.onChange(null); // Call onChange with null
  }

  removeFile(): void {
    this.clearFile();
  }

  writeValue(value: any): void {
    if (typeof value === 'string') {
      this.convertImageUrlToBase64(value).then(base64 => {
        this.fileUrl = base64;
        this.fileUrlChange.emit(this.fileUrl);
        this.onChange(base64 as string); // Ensure onChange is called with base64
      });
    } else {
      this.fileUrl = value;
    }
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    // Handle disabled state if necessary
  }

  private async convertImageUrlToBase64(url: string): Promise<string | ArrayBuffer | null> {
    const response = await fetch(url);
    const blob = await response.blob();
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result);
      reader.onerror = reject;
      reader.readAsDataURL(blob);
    });
  }

  ngOnInit(): void {
    if (!this.fileUrl){
      console.log('false')
      this.fileUrl = 'assets/images/icons/company-logo.png'
    }
    else {
      return;
    }
    console.log('file url ==>' , this.fileUrl)
  }
}
