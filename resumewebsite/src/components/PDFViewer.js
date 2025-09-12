import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiDownload, FiExternalLink, FiX, FiFileText } from 'react-icons/fi';

const PDFViewer = ({ pdfPath, title }) => {
  const [isOpen, setIsOpen] = useState(false);

  const downloadPDF = () => {
    const link = document.createElement('a');
    link.href = pdfPath;
    link.download = title || 'case-study.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const openPDFInNewTab = () => {
    window.open(pdfPath, '_blank');
  };

  return (
    <>
      {/* PDF Viewer Button */}
      <motion.button
        onClick={() => setIsOpen(true)}
        className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-200"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <FiFileText className="w-5 h-5" />
        <span>View Full Case Study PDF</span>
      </motion.button>

      {/* PDF Options Modal */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
          onClick={() => setIsOpen(false)}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-2xl max-w-md w-full p-6"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                {title || 'Case Study Document'}
              </h3>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                title="Close"
              >
                <FiX className="w-5 h-5" />
              </button>
            </div>

            {/* Options */}
            <div className="space-y-4">
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Choose how you'd like to view the case study document:
              </p>
              
              <motion.button
                onClick={openPDFInNewTab}
                className="w-full flex items-center space-x-3 p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <FiExternalLink className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <div className="text-left">
                  <div className="font-medium text-blue-900 dark:text-blue-100">
                    Open in New Tab
                  </div>
                  <div className="text-sm text-blue-700 dark:text-blue-300">
                    View PDF in your browser
                  </div>
                </div>
              </motion.button>

              <motion.button
                onClick={downloadPDF}
                className="w-full flex items-center space-x-3 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg hover:bg-green-100 dark:hover:bg-green-900/30 transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <FiDownload className="w-5 h-5 text-green-600 dark:text-green-400" />
                <div className="text-left">
                  <div className="font-medium text-green-900 dark:text-green-100">
                    Download PDF
                  </div>
                  <div className="text-sm text-green-700 dark:text-green-300">
                    Save to your device
                  </div>
                </div>
              </motion.button>
            </div>

            {/* Footer */}
            <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
              <p className="text-xs text-gray-500 dark:text-gray-400 text-center">
                The PDF will open in a new tab or download to your device
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
};

export default PDFViewer;
