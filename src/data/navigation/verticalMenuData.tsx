// Type Imports
import type { VerticalMenuDataType } from '@/types/menuTypes'
import type { getDictionary } from '@/utils/getDictionary'

// const verticalMenuData = (dictionary: Awaited<ReturnType<typeof getDictionary>>): VerticalMenuDataType[] => [
//   // This is how you will normally render submenu
//   {
//     label: dictionary['navigation'].dashboard,
//     icon: 'ri-home-smile-line',
//     suffix: {
//       label: '5',
//       color: 'error'
//     },
//     // children: [
//     //   // This is how you will normally render menu item
//     //   {
//     //     label: dictionary['navigation'].crm,
//     //     href: '/dashboards/crm'
//     //   },
//     //   {
//     //     label: dictionary['navigation'].analytics,
//     //     href: '/dashboards/analytics'
//     //   },
//     //   {
//     //     label: dictionary['navigation'].eCommerce,
//     //     href: '/dashboards/ecommerce'
//     //   },
//     //   {
//     //     label: dictionary['navigation'].academy,
//     //     href: '/dashboards/academy'
//     //   },
//     //   {
//     //     label: dictionary['navigation'].logistics,
//     //     href: '/dashboards/logistics'
//     //   }
//     // ]
//   }
// ]

const verticalMenuData = (dictionary: Awaited<ReturnType<typeof getDictionary>>): VerticalMenuDataType[] => [
  {
    label: dictionary['navigation'].dashboard,
    href: "/admin/dashboard",
    icon: "mdi:home-outline"
  },
  {
    label: dictionary['navigation'].helpdesk,
    icon: "mdi:ticket-outline",
    isSection: true,
    children: [
      {
        label: "Member Queries",
        href: "/admin/helpdesk/issues"
      },
      {
        label: "Help Topics",
        href: "/admin/helpdesktopics/help_topics"
      },
      {
        label: "Canned Responses",
        href: "/admin/helpdeskcannedresponse/cannedresponse"
      },
      {
        label: "Escalations",
        href: "/admin/helpdesktopics/list_escalations"
      }
    ]
  },
  {
    label: "Incomes",
    icon: "ph:currency-inr-bold",
    isSection: true,
    children: [
      {
        label: "Maintainance Dues",
        href: "/admin/income-details/incomemember"
      },
      {
        label: "Incidental Bills",
        href: "/admin/common-billing/listcommonbill/"
      },
      {
        label: "Non Member Bills",
        href: "/admin/income-details/incomenonmember"
      },
      {
        label: "Recipt Tracker",
        href: "/admin/income-details/incomepaymenttracker"
      },
      {
        label: "Advances",
        href: "/admin/credit-accounts/memberAdvances/"
      },
      {
        label: "Billable Items",
        href: "/admin/billable-note/list"
      },
      {
        label: "Credit Notes",
        href: "/admin/credit-accounts/creditNote"
      }
    ]
  },
  {
    label: "Expenses",
    icon: "mdi:shopping-cart",
    children: [
      {
        label: "Purchases/Expenses",
        href: "/admin/vendorbill/vendorBill"
      },
      {
        label: "Purchases/Expenses",
        href: "/admin/vendorbill/vendorBill",
        hideInNavbar: true,
        children: [
          {
            label: "Add/ Edit Vendor Bill",
            href: "/admin/vendorbill/addVendorBill"
          },
          {
            label: "New/Edit Cash Purchase",
            href: "/admin/vendorbill/addBill"
          }
        ]
      },

      {
        label: "Miscellaneous",
        href: "/admin/otherexpense/expenses"
      },
      {
        label: "Miscellaneous",
        href: "/admin/otherexpense/expenses",
        hideInNavbar: true,
        children: [
          {
            label: "Miscellaneous Details",
            href: "/admin/otherexpense/expenseDetails/[id]"
          },
          {
            label: "New/Edit Miscellaneous",
            href: "/admin/otherexpense/addExpense"
          }
        ]
      },
      {
        label: "Purchase/Work Orders",
        href: "/admin/purchaseform/list"
      },
      {
        label: "Purchase/Work Orders",
        href: "/admin/purchaseform/list/",
        hideInNavbar: true,
        children: [
          {
            label: "Add Purchase/Work Order",
            href: "/admin/purchaseform/add"
          },
          {
            label: " Purchase/Work Order",
            href: "/admin/purchaseform/view/[id]"
          }
        ]
      },
      {
        label: "Member Billable Purchases",
        href: "/admin/vendorbill/billableVendorBills"
      },
      {
        label: "Payment Tracker",
        href: "/admin/vendorbill/expensePaymentTrackerList"
      },
      {
        label: "Vendor Advances",
        href: "/admin/vendorbill/vendorAdvances"
      },
      {
        label: "Vendor Advances",
        href: "/admin/vendorbill/vendorAdvances",
        hideInNavbar: true,
        children: [
          {
            label: "Add Vendor Advance",
            href: "/admin/vendorbill/addVendorAdvances"
          },
          {
            label: "View Vendor Transactions",
            href: "/admin/vendorbill/viewAllTransactionsVendors/[id]"
          },
          {
            label: "New Vendor Advance",
            href: "/admin/vendorbill/addVendorAdvances/[id]"
          }
        ]
      }
    ]
  },
  {
    label: "Vendors",
    icon: "mdi:users-group",
    children: [
      {
        label: "Vendors",
        href: "/admin/vendor/viewVendor"
      },
      {
        label: "Vendors",
        href: "/admin/vendor/viewVendor",
        hideInNavbar: true,
        children: [
          {
            label: "Vendor Bills",
            href: "/admin/vendor/vendorBillList/[id]"
          },
          {
            label: "Payment Transactions",
            href: "/admin/vendorbill/viewPayments/[id]"
          },
          {
            label: "Pay Bill",
            href: "/admin/vendorbill/payBill/[id]"
          },
          {
            label: "Vendor Bills",
            href: "/admin/vendorbill/vendorBillDetails/[id]"
          },
          {
            label: "Vendor Payments",
            href: "/admin/vendor/vendorPaymentList/[id]"
          },
          {
            label: "New Vendor",
            href: "/admin/vendor/addVendor"
          },
          {
            label: "Vendor Details",
            href: "/admin/vendor/viewVendorDetails/[id]"
          }
        ]
      },
      {
        label: "vendor Ageing Report",
        href: "/admin/vendor/vendorAging"
      },
      {
        label: "Edit Vendor Details",
        href: "/admin/vendor/editVendorDetails/[id]",
        hideInNavbar: true
      },
      {
        label: "Vendor Bill",
        hideInNavbar: true,
        children: [
          {
            label: "Vendor Bills",
            href: "/admin/vendorbill/vendorBill"
          },
          {
            label: "Add/ Edit Vendor Bill",
            href: "/admin/vendorbill/addVendorBill"
          },
          {
            label: "Billable Vendor Bill",
            href: "/admin/vendorbill/billableVendorBills"
          }
        ]
      }
    ]
  },
  {
    label: "Accounts",
    icon: "zondicons:calculator",
    children: [
      {
        children: [
          {
            label: "Accounts",
            href: "/admin/accounts/getAllLedgers"
          },
          {
            label: "Charts of Accounts",
            href: "/admin/accounts/viewLedgers"
          },
          {
            label: "Groups",
            href: "/admin/accounts/viewGroups"
          },
          {
            label: "Bank Reconciliation Form ",
            href: "/admin/accounts/bankReconciliationForm"
          },
          {
            label: "Close Accounts ",
            href: "/admin/accountsetting/accountset"
          },
          {
            label: "Investments ",
            href: "/admin/assets/investmentslist"
          },
          {
            label: "Create Ledger",
            href: "/admin/accounts/createLedger",
            hideInNavbar: true
          }
        ]
      },
      {
        label: "Current Assets",
        children: [
          {
            label: "Bank Accounts",
            href: "/admin/accounts/viewBankAccounts"
          },
          {
            label: "Cash Accounts",
            href: "/admin/accounts/viewCashAccounts"
          }
        ]
      },
      {
        label: "Fixed Assets",
        children: [
          {
            label: "Assets",
            href: "/admin/assets/assetsList"
          }
        ]
      },
      {
        label: "Financial Statements",
        children: [
          {
            label: "Trial Balance",
            href: "/admin/accountsreporting/trial_balance"
          },
          {
            label: "Cash Flow",
            href: "/admin/accountsreporting/cashflow"
          },
          {
            label: "Income And Expenditure",
            href: "/admin/accountsreporting/profit_and_lossT"
          },
          {
            label: "Balance Sheet",
            href: "/admin/accountsreporting/balancesheet/"
          },
          {
            label: "Incorrect Ledger Entries",
            href: "/admin/transaction/incorrect_ledger_entries"
          }
        ]
      },
      {
        label: "Tax",
        children: [
          {
            label: "Tax Classes",
            href: "/admin/tax/viewTax"
          },
          {
            label: "Tax Exemption            ",
            href: "/admin/taxexemption/viewTaxExemption"
          }
        ]
      },
      {
        label: "Challans",
        children: [
          {
            label: "TDS Challans",
            href: "/admin/tds-challans/list"
          }
        ]
      },
      {
        label: "Vouchers",
        children: [
          {
            label: "Voucher Tracker",
            href: "/admin/transaction/listVoucherTracker"
          },
          {
            label: "Journal Voucher",
            href: "/admin/transaction/addJournalEntry"
          },
          {
            label: "Contra Voucher",
            href: "/admin/transaction/addContraEntry"
          },
          {
            label: "Payment Voucher            ",
            href: "/admin/transaction/addPaymentVoucher"
          },
          {
            label: "Multiple Payment Voucher",
            href: "/admin/transaction/addMultiplePaymentVoucher"
          },
          {
            label: "Debit Note ",
            href: "/admin/transaction/addDebitEntry"
          }
        ]
      }
    ]
  },
  {
    label: "DCO",
    breadcrumb: -1,
    icon: "fa6-solid:building",
    children: [
      {
        children: [
          {
            label: "Society Website",
            href: "/admin/socweb/socprofile"
          },
          {
            label: "Documents",
            href: "/admin/socweb/socprofile/documents"
          },
          {
            label: "Allottees",
            href: "/admin/member/list"
          },
          {
            label: "Parking Allotments ",
            href: "/admin/parking-allotments/list"
          },
          {
            label: "Vehicles Registration",
            href: "/admin/parking/list"
          },
          {
            label: "Management Committee ",
            href: "/admin/committees/list"
          },
          {
            label: "NOC Form Templates",
            href: "/admin/societies/nocForms"
          },
          {
            label: "NOC Forms",
            href: "/admin/noc/list"
          },
          {
            label: "Notices & Circulars",
            href: "/admin/notices/list"
          },
          {
            label: "Notice & Circular Templates",
            href: "/admin/notices/list_template"
          },
          {
            label: "Photo Gallery",
            href: "/admin/albums/list"
          },
          {
            label: "Non Members",
            href: "/admin/income-details/nonmembermaster"
          }
        ]
      },
      {
        label: "Inventory",
        breadcrumb: -1,
        children: [
          {
            label: "Inventory?",
            breadcrumb: "Assets & Inventory",
            href: "/admin/inventory/listInventory",
            children: [
              {
                label: "New / Edit Inventory",
                breadcrumb: "New Inventory",
                href: "/admin/inventory/addInventoryItem",
                hideInNavbar: true
              }
            ]
          }
        ]
      }
    ]
  },
  {
    label: "Reports",
    icon: "zondicons:flag",
    children: [
      {
        label: "Reports",
        children: [
          {
            label: "TDS Receivable",
            href: "/admin/income-details/tdsreceivableReport"
          },
          {
            label: "TDS Payable",
            href: "/admin/vendorbill/tdspayableReport"
          },
          {
            label: "Members Receivable",
            href: "/admin/income-details/membersReceivableReport"
          },
          {
            label: "Members Incidental Receivable",
            href: "/admin/income-details/incidentalReceivableReport"
          },
          {
            label: "Member Invoice Detail",
            href: "/admin/income-details/membersInvoiceDetailReport"
          },
          {
            label: "Member Incidental Invoice Detail",
            href: "/admin/income-details/incidentalInvoiceDetailReport"
          },
          {
            label: "Member Unit Statement",
            href: "/admin/income-details/membersUnitStatementReport"
          },
          {
            label: "Member Unit Ledger Statement",
            href: "/admin/accountsreporting/membersUnitAccountStatementReport"
          },
          {
            label: "Non Member Receivable",
            href: "/admin/income-details/nonMembersReceivableReport"
          },
          {
            label: "Income Receipt Report",
            href: "/admin/income-details/memberReceiptReport"
          },
          {
            label: "Expense Report",
            href: "/admin/vendorbill/expenseReport"
          },
          {
            label: "Expense Payment Report",
            href: "/admin/vendorbill/expenseReport"
          },
          {
            label: "Expense Budget Report",
            href: "/admin/vendorbill/expenseBudgetReport"
          },
          {
            label: "GST Reports",
            href: "/admin/accounts/gstReports"
          },
          {
            label: "Voucher Report",
            href: "/admin/transaction/voucherReport"
          },
          {
            label: "Receipt Report",
            href: "/admin/income-details/receiptReport"
          },
          {
            label: "Bank Reco Statement",
            href: "/admin/accounts/bankRecoReport"
          }
        ]
      },

      {
        label: "Member",
        children: [
          {
            label: "Member Contact Detail            ",
            href: "/admin/member/memberContactDetailReportPrint"
          },
          {
            label: "Members Signature List            ",
            href: "/admin/member/memberSignatureListReport"
          },
          {
            label: "Tenants Signature",
            href: "/admin/member/tenantsSignatureListReport"
          }
        ]
      },
      {
        label: "Credit Accounts",
        children: [
          {
            label: "Member Advance",
            href: "/admin/credit-accounts/memberCreditNote"
          },
          {
            label: "Non Member Advances",
            href: "/admin/credit-accounts/nonmemberCreditNote"
          }
        ]
      },
      {
        label: "Parking",
        children: [
          {
            label: "Parking Allottment Detail",
            href: "/admin/parking-allotments/parkingAllottmentDetailReportPrint"
          },
          {
            label: "Vehicle Registration Detail",
            href: "/admin/parking-allotments/allottedVehicleDetailReportPrint"
          },
          {
            label: "Registered Vehicle Count Detail",
            href: "/admin/parking-allotments/allottedVehicleCountDetailReport"
          }
        ]
      },
      {
        label: "help Desk",
        children: [
          {
            label: "Complaints",
            href: "/admin/helpdesk/helpdeskReport"
          }
        ]
      },
      {
        label: "Statutory",
        children: [
          {
            label: "J Register",
            href: "/admin/member/jRegisterReportPrint"
          }
        ]
      }
    ]
  },

  {
    label: "Settings",
    icon: "mdi:cog",
    children: [
      {
        label: "Access Control",
        children: [
          {
            label: "Users",
            href: "/admin/users/list"
          },

          {
            label: "User Roles",
            href: "/admin/roles/listSocRoles"
          }
        ]
      },
      {
        label: "Users",
        hideInNavbar: true,
        children: [
          {
            label: "User Details",
            href: "/admin/users/userDetails/[id]/[role]"
          }
        ]
      },
      {
        label: "Allottee Roles ",
        hideInNavbar: true,
        children: [
          {
            label: "New/Edit Role",
            href: "/admin/roles/add"
          },

          {
            label: "New/Edit Role",
            href: "/admin/roles/add/[id]"
          }
        ]
      },
      {
        label: "Staffs",
        children: [
          {
            label: "Staffs",
            href: "/admin/staffs/staffLists"
          },

          {
            label: "Staff Categories",
            href: "/admin/staffs/settings"
          }
        ]
      },
      {
        label: "Staffs",
        hideInNavbar: true,
        children: [
          {
            label: "edit staff",
            href: "/admin/staffs/editStaff/[id]"
          },
          {
            label: "New Staff",
            href: "/admin/staffs/addStaff"
          },
          {
            label: "Staff Details",
            href: "/admin/staffs/staffDetails/[id]"
          }
        ]
      },
      {
        label: "Complex Setup",
        children: [
          {
            label: "Buildings",
            href: "/admin/building/list"
          },
          {
            label: "Unit Categories",
            href: "/admin/societies/listUnitType"
          },
          {
            label: "Complex Units",
            href: "/admin/units/list"
          },
          {
            label: "Gate Settings",
            href: "https://gate.cubeonebiz.com/auto-login?username=917977679454&session_token=JDJ5JDEwJFNaZXhBRjVsNUd5SUlFQ1FqdVdnVHU0cGZBUHhaSC93ZE1JYklxelRvaGVKSDVlWlAuVWtD&company_id=412",
            newTab: true
          }
        ]
      },
      {
        label: "Complex Setup",
        hideInNavbar: true,
        children: [
          {
            label: "New Bulk Unit Identification",
            href: "/admin/units/bulkUnitAdd"
          },
        ]
      },
      {
        label: "Buildings",
        hideInNavbar: true,
        children: [
          {
            label: "New Building/Block",
            href: "/admin/building/add"
          },
          {
            label: "Edit Building/Block",
            href: "/admin/building/edit/[id]"
          },
          {
            label: "Delete Buildings",
            href: "/admin/building/deletedBuildingList"
          }
        ]
      },
      {
        label: "Unit Categories",
        hideInNavbar: true,
        children: [
          {
            label: "New Unit Category",
            href: "/admin/societies/defineUnitType"
          },
          {
            label: "Edit Unit Category",
            href: "/admin/societies/editUnitType/[id]"
          }
        ]
      },
      {
        label: "Complex Units",
        hideInNavbar: true,
        children: [
          {
            label: "New/Edit Unit",
            href: "/admin/units/add"
          },
          {
            label: "New Bulk Unit Identification",
            href: "/admin/units/bulkUnitAdd"
          }
        ]
      },
      {
        label: "Income Setup",
        children: [
          {
            label: "Auto Invoicing Rules",
            href: "/admin/income-tracker-invoice-setting/invoicelisting"
          },
          {
            label: "Incidental Invoicing Rules",
            href: "/admin/income-tracker-setting/readcommonbilling/activebilling"
          },
          {
            label: "General Settings",
            href: "/admin/income-tracker-setting/readGeneralSettings"
          },
          {
            label: "Income Accounts",
            href: "/admin/income-tracker-setting/readIncomeAccounts"
          },
          {
            label: "Particular Settings ",
            href: "/admin/income-tracker-setting/readParticularSettings"
          },
          {
            label: "Payment Reminder",
            href: "/admin/income-tracker-setting/paymentreminder"
          },
        ]
      },
      {
        label: "Income Setup",
        hideInNavbar: true,
        children: [
          {
            label: "Unit Rule",
            href: "/admin/income-tracker-invoice-setting/unitrules/[id]"
          },
          {
            label: "Rule",
            href: "/admin/income-tracker-invoice-setting/preview_income/[id]"
          },
          {
            label: "Payment Gateways",
            href: "/admin/accounts/paymentGateway"
          }
        ]
      },
      {
        label: "Expense Setup",
        children: [
          {
            label: "Expense Accounts            ",
            href: "/admin/expensetracker/settingsApply"
          },
          {
            label: "Expense Approval",
            href: "/admin/expensetracker/setExpenseRange"
          },
          {
            label: "Expense GST Rates ",
            href: "/admin/expensetracker/expensetaxsetup"
          },
          {
            label: "Expense Budgets",
            href: "/admin/expensetracker/expenseaccountsbudgets"
          },
          {
            label: "Expense TDS Rates",
            href: "/admin/expensetracker/expensetdsrate"
          }
        ]
      },
      {
        label: "Expense Setup",
        hideInNavbar: true,
        children: [
          {
            label: "TDS Rate",
            href: "/admin/expensetracker/addexpensetdsrate/[id]"
          }
        ]
      },
      {
        label: "General",
        children: [
          {
            label: "App Preferences",
            href: "/admin/societies/preferences"
          },
          {
            label: "Auto Response Email            ",
            href: "/admin/societies/emailtemplates"
          },
          {
            label: "Auto Response SMS            ",
            href: "/admin/societies/smstemplates"
          },
          {
            label: "Email SMS Logs",
            href: "/admin/societies/viewEmailSmsLog"
          },
          {
            label: "Send App Notification",
            href: "/admin/societies/appnotification"
          }
        ]
      },
      {
        label: "General",
        hideInNavbar: true,
        children: [
          {
            label: "Email Template Details",
            href: "/admin/societies/emailTemplateDetail/[id]"
          },
          {
            label: "Auto Response Edit Email",
            href: '/admin/societies/emailtemplateedit/[id]'
          }
        ]
      }
    ]
  }
]

export default verticalMenuData
