import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = 'https://api-99ja.onrender.com';  // API URL

  constructor(private http: HttpClient) {}

  // Analyze text for suspicious content
  analyzeText(message: string): Observable<any> {
    const body = new FormData();
    body.append('message', message);

    return this.http.post(`${this.apiUrl}/analyze_text`, body);
  }

  // Analyze an image for suspicious content
  analyzeImage(file: File): Observable<any> {
    const formData = new FormData();
    formData.append('file', file, file.name);

    return this.http.post(`${this.apiUrl}/analyze_image`, formData);
  }
}
