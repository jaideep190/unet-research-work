import React from 'react';

function ContentSection({ id, title, active }) {
  return (
    <section id={id} className={`content-section ${active ? 'active' : ''}`}>
      <h2 style={{ fontFamily: 'Georgia, serif' }}>{title}</h2>
      <div className="section-content" style={{ fontFamily: 'Arial, sans-serif' }}>
        {id === 'paper' && (
          <>
            <h3 style={{ fontFamily: 'Georgia, serif' }}>SmartBP: Smartphone Based Blood Pressure Measurement System Using Mixed Attention Gated U-Net</h3>
            <p>This paper presents a novel approach to blood pressure measurement utilizing smartphone technology and advanced deep learning techniques. Our methodology leverages photoplethysmography (PPG) signals captured via smartphone cameras, combined with state-of-the-art neural network architectures for precise blood pressure estimation.</p>
            <p>Key contributions of this research include:</p>
            <ul>
              <li>Development of an autonomous and non-invasive blood pressure measurement system using only a smartphone</li>
              <li>Implementation of a Mixed Attention Gated U-Net (MAGU) model for accurate blood pressure prediction</li>
              <li>Optimization of the model for edge deployment, reducing size to 14MB while maintaining high accuracy</li>
              <li>Achieving a mean absolute error (MAE) of 2.96 mmHg for Systolic Blood Pressure (SBP) and 1.90 mmHg for Diastolic Blood Pressure (DBP)</li>
              <li>Extensive testing on various smartphone models and comparison with standard BP monitors</li>
            </ul>
            <p>The research addresses the growing need for accessible and frequent blood pressure monitoring, particularly in low- and middle-income countries where hypertension is prevalent but often underdiagnosed.</p>
            <p>
              <a href="https://drive.google.com/file/d/10uAircuhzgGHoexZ-j0F3pTDopLMNw0h/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                Access the full research paper (PDF)
              </a>
            </p>
            <img src="/images/paper.png" alt="Paper preview" className="section-image" style={{ maxWidth: '50%', height: 'auto' }} />
          </>
        )}
        {id === 'app' && (
          <>
            <h3 style={{ fontFamily: 'Georgia, serif' }}>SmartBP Application</h3>
            <p>SmartBP is an autonomous, non-invasive smartphone application for blood pressure measurement. It utilizes the smartphone's camera and flash to capture PPG signals from the user's fingertip, employing advanced signal processing techniques for accurate blood pressure estimation.</p>
            <p>Key features:</p>
            <ul>
              <li>Edge-based methodology for real-time processing, ensuring minimal latency</li>
              <li>Platform independent architecture, compatible with Android devices</li>
              <li>Intuitive user interface designed for ease of use and accessibility</li>
              <li>Utilizes advanced Mixed Attention Gated U-Net model for high-precision predictions</li>
              <li>Implements robust signal filtering and artifact removal algorithms</li>
              <li>Real-time PPG signal extraction and processing</li>
              <li>Accurate SBP and DBP estimation comparable to traditional BP monitoring devices</li>
            </ul>
            <p>The application has been tested on various smartphone models, including iPhone 12, VIVO Y21, and Realme 5i, demonstrating consistent performance across different hardware configurations.</p>
            <p>
              <a href="https://drive.google.com/file/d/1ZoLCzuhn4jIwI4gLnqGmV0zfreHOU6QU/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                Access the SmartBP application
              </a>
            </p>
            <img src="/images/app.png" alt="App screenshot" className="section-image" />
          </>
        )}
        {id === 'data-visualization' && (
          <>
            <h3 style={{ fontFamily: 'Georgia, serif' }}>Dataset and Data Visualization</h3>
            <p>Our study utilizes a subset of the MIMIC-III database, spanning from 2001 to 2008, sampled at 125 Hz. This dataset, comprising 862,492 records of PPG and ABP signals, underwent rigorous preprocessing to ensure data quality and validity.</p>
            <p>Key aspects of our data preparation and visualization:</p>
            <ul>
              <li>Focus on 7-second signal episodes for analysis</li>
              <li>Data normalization using min-max technique, constraining values to [-2, 2] range</li>
              <li>Normalization formula: X<sub>normalized</sub> = (X - min(X)) / (max(X) - min(X))</li>
              <li>Implementation of a Butterworth filter for PPG signal cleaning</li>
              <li>Region of Interest (ROI) determination to mitigate uneven lighting effects in smartphone captures</li>
            </ul>
            <p>Our study employs sophisticated data visualization techniques to analyze blood pressure data distribution and PPG signals, facilitating deeper insights into cardiovascular health metrics:</p>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <img src="/images/data1.png" alt="SBP and DBP Distribution" className="section-image" style={{ width: '48%' }} />
              <img src="/images/data2.png" alt="PPG Signal Visualization" className="section-image" style={{ width: '48%' }} />
            </div>
            <p>Left: Statistical distribution of Systolic (SBP) and Diastolic (DBP) Blood Pressure samples, illustrating the range and frequency of measurements in our dataset. This visualization helps in understanding the overall blood pressure profile of the study population.</p>
            <p>Right: Comparative visualization of PPG signals.</p>
            <p>The dataset exhibits numerous outliers, with several values indicating elevated SBP exceeding 140 mmHg and DBP below 60 mmHg, suggesting a prevalence of hypertension among a significant portion of the population within the dataset.</p>
          </>
        )}
        {id === 'model-architecture' && (
          <>
            <h3 style={{ fontFamily: 'Georgia, serif' }}>Mixed Attention Gated U-Net Model</h3>
            <p>The core innovation of SmartBP lies in its utilization of a Mixed Attention Gated U-Net (MAGU) model for blood pressure estimation. This advanced architecture enhances feature extraction and prediction accuracy through a combination of convolutional and attention mechanisms.</p>
            <p>Key components:</p>
            <ul>
              <li>Conv1D layers for initial feature extraction from time-series PPG data</li>
              <li>MaxPooling1D layers for efficient down-sampling and dimensionality reduction</li>
              <li>ResidualBlocks to mitigate the vanishing gradient problem and preserve contextual information</li>
              <li>MixedAttentionBlock for enhanced feature selection, combining spatial and channel attention</li>
              <li>MixedGatedAttentionBlock for dynamic attention mechanism, allowing the model to focus on the most relevant features</li>
              <li>Decoder with Conv1D layers and Mixed Attention modules for improved feature representation</li>
              <li>Global Average Pooling 1D layers for final SBP and DBP predictions</li>
            </ul>
            <p>The model was implemented using TensorFlow 2.0.0 and Keras, with a total size of approximately 40 MB, later optimized to 14 MB using TensorFlow Lite for efficient smartphone deployment.</p>
            <img src="/images/model_architecture.png" alt="MAGU Model Architecture" className="section-image" style={{ width: '70%' }}/>
          </>
        )}
        {id === 'fourier-fit' && (
          <>
            <h3 style={{ fontFamily: 'Georgia, serif' }}>Fourier Fit Analysis</h3>
            <p>To further validate our model's performance and understand the underlying patterns in blood pressure predictions, we conducted a Fourier fit analysis on the predicted SBP and DBP values.</p>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <img src="/images/fourierfitsbp.png" alt="SBP Fourier Fit" className="section-image" style={{ width: '48%' }} />
              <img src="/images/fourierfitdbp.png" alt="DBP Fourier Fit" className="section-image" style={{ width: '48%' }} />
            </div>
            <p>Left: Fourier fit analysis of Systolic Blood Pressure (SBP) predictions.</p>
            <p>Right: Fourier fit analysis of Diastolic Blood Pressure (DBP) predictions.</p>
            <p>The Fourier fit analysis helps in identifying periodic patterns and trends in the predicted blood pressure values. This analysis provides insights into the model's ability to capture both short-term fluctuations and long-term trends in blood pressure measurements, further validating the robustness of our MAGU model.</p>
          </>
        )}
        {id === 'error-analysis' && (
          <>
            <h3 style={{ fontFamily: 'Georgia, serif' }}>Performance and Error Analysis</h3>
            <p>SmartBP demonstrates high accuracy in blood pressure prediction, meeting British Hypertension Society (BHS) Grade B criteria, a widely recognized standard in blood pressure measurement accuracy:</p>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <div style={{ marginBottom: '20px', width: '100%' }}>
                <h4 style={{ fontFamily: 'Georgia, serif' }}>Model Performance and Error Metrics</h4>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <img src="/images/error_metric.png" alt="Model Performance" className="section-image" style={{ width: '48%', objectFit: 'contain' }} />
                  <img src="/images/bhs_criteria.png" alt="BHS Criteria Results" className="section-image" style={{ width: '48%', objectFit: 'contain' }} />
                </div>
              </div>
              <div style={{ marginBottom: '20px', width: '100%' }}>
                <h4 style={{ fontFamily: 'Georgia, serif' }}>Error Distribution and Bland-Altman Plot</h4>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <img src="/images/error_plot1.png" alt="Error Distribution" className="section-image" style={{ width: '48%', objectFit: 'contain' }} />
                  <img src="/images/blandaltman_plot.png" alt="Bland-Altman Plot" className="section-image" style={{ width: '48%', objectFit: 'contain' }} />
                </div>
              </div>
            </div>
            <p>Key results:</p>
            <ul>
              <li>Mean Absolute Error (MAE): 2.96 mmHg for Systolic Blood Pressure (SBP), 1.9 mmHg for Diastolic Blood Pressure (DBP)</li>
              <li>BHS Grade B accuracy achieved for both SBP and DBP, indicating clinical-grade performance</li>
              <li>Consistent performance across different smartphone models, demonstrating robust cross-device compatibility</li>
              <li>95% Confidence Interval within ±8 mmHg for SBP and ±6 mmHg for DBP</li>
              <li>Real-time testing conducted on 13 individuals using both iPhone 12 and Realme 5i smartphones</li>
              <li>Comparison with automatic wrist blood pressure monitor showed high correlation</li>
            </ul>
            <p>The Bland-Altman plot demonstrates good agreement between predicted and true blood pressure values, with most points falling within the 95% confidence interval. The error distribution histogram shows that a significant number of predictions have minimal absolute error, indicating high accuracy in blood pressure estimation.</p>
          </>
        )}
      </div>
    </section>
  );
}

export default ContentSection;